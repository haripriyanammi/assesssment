import { Request, Response } from "express";
import { getCashOutflow } from "../services/cashflow.service";

export const cashflowController = async (req: Request, res: Response) => {
  try {
    const data = await getCashOutflow();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
