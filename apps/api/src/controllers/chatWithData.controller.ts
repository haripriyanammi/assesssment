import { Request, Response } from "express";
import { chatWithDataService } from "../services/chatWithData.service";

export const chatWithDataController = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ success: false, error: "Query required" });
    }

    const data = await chatWithDataService(query);

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
