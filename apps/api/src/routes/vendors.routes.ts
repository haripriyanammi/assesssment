import { Router } from "express";
import { topVendorsController } from "../controllers/vendors.controller";

const router = Router();

router.get("/top10", topVendorsController);

export default router;
