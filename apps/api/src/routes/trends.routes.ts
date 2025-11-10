import { Router } from "express";
import { invoiceTrendsController } from "../controllers/trends.controller";

const router = Router();

router.get("/", invoiceTrendsController);

export default router;
