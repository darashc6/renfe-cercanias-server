import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

export const sendCustomerServiceForm = (req, res) => {
  const {
    railNetworkName,
    petitionType,
    firstName,
    firstSurname,
    secondSurname,
    email,
    phoneNumber,
    comment,
  } = req.body;

  let mailContext = {
    railNetworkName,
    petitionType,
    firstName,
    firstSurname,
    email,
    comment,
  };

  if (secondSurname && secondSurname.length > 0) {
    mailContext["secondSurname"] = secondSurname;
  }

  if (phoneNumber && phoneNumber.length > 0) {
    mailContext["phoneNumber"] = phoneNumber;
  }

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  let mailOptions = {
    from: `Atencion al Cliente - Renfe Cercanias <${process.env.NODEMAILER_USER}>`,
    to: "business.cercanias@zohomail.eu",
    subject: `Nuevo email - Cercanías ${railNetworkName} - ${email}`,
    template: "email",
    context: mailContext,
  };

  let mailOptionsCopy = {
    from: `Atencion al Cliente - Renfe Cercanias <${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: "Renfe Cercanias - Atención al Cliente",
    template: "email",
    context: { ...mailContext, userTemplate: true },
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      transporter
        .sendMail(mailOptionsCopy)
        .then((info) => {
          res.status(200).json({ message: "Form succesfully sent" });
          console.log(info);
        })
        .catch((error) => {
          console.error(error);
          res.status(400).json({ message: error });
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error: error });
    });
};
