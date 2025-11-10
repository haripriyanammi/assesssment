import { Request, Response } from "express";
import { getInvoices } from "../services/invoices.service";

export const invoicesController = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const data = await getInvoices(search);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
