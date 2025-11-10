import { Request, Response } from "express";
import { getInvoiceTrends } from "../services/trends.service";

export const invoiceTrendsController = async (req: Request, res: Response) => {
  try {
    const data = await getInvoiceTrends();
    return res.json({ success: true, data });
  } catch (error) {
    console.error("Invoice Trends Error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
