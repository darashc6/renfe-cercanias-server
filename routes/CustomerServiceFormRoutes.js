import express from "express";
import { sendCustomerServiceForm } from "../controllers/CustomerServiceFormController.js";

const router = express.Router();

router.post('/', sendCustomerServiceForm);

export default router;