import { Router } from "express";
import { invoicesController } from "../controllers/invoices.controller";

const router = Router();

router.get("/", invoicesController);

export default router;
