import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

// MOUNT ALL API ROUTES
app.use("/api", router);

// Test Route
app.get("/test", (req, res) => {
  res.json({ message: "API working" });
});

export default app;
