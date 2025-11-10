import { Router } from "express";
import { chatWithDataController } from "../controllers/chatWithData.controller";

const router = Router();

router.post("/", chatWithDataController);

export default router;
