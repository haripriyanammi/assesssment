import { Request, Response } from "express";
import { getTopVendors } from "../services/vendors.service";

export const topVendorsController = async (req: Request, res: Response) => {
  try {
    const data = await getTopVendors();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
