import { Request, Response } from "express";
import { getCategorySpend } from "../services/category.service";

export const categorySpendController = async (req: Request, res: Response) => {
  try {
    const data = await getCategorySpend();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
