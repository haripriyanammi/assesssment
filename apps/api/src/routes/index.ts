import { Router } from "express";

import statsRoutes from "./stats.routes";
import trendsRoutes from "./trends.routes";
import invoicesRoutes from "./invoices.routes";
import vendorsRoutes from "./vendors.routes";
import categoryRoutes from "./category.routes";
import cashflowRoutes from "./cashflow.routes";
import chatWithDataRoutes  from "./chatWithData.routes";
const router = Router();

router.use("/stats", statsRoutes);
router.use("/invoice-trends", trendsRoutes);
router.use("/invoices",invoicesRoutes);
router.use("/vendors",vendorsRoutes);
router.use("/category-spend",categoryRoutes);
router.use("/cashflow",cashflowRoutes);
router.use("/chat-with-data",chatWithDataRoutes);
export default router;
