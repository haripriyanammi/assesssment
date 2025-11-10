import { Router } from "express";
import { categorySpendController } from "../controllers/category.controller";

const router = Router();

router.get("/", categorySpendController);

export default router;
