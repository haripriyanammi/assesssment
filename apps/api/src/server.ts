// src/server.ts
import app from "./app";

const PORT = 5050;

app.listen(PORT, () => {
  console.log("✅ Server is running on port", PORT);
});
