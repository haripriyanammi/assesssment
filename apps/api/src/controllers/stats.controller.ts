// src/controllers/stats.controller.ts
import { Request, Response } from "express";
import { getStats } from "../services/stats.service";

export const fetchStats = async (req: Request, res: Response) => {
  try {
    const stats = await getStats();
    res.json(stats);
  } catch (error) {
    console.error("Error in fetchStats:", error);
    res.status(500).json({ error: "Failed to fetch dashboard stats" });
  }
};
