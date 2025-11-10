import { Router } from "express";
import { cashflowController } from "../controllers/cashflow.controller";

const router = Router();

router.get("/", cashflowController);

export default router;
