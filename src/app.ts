import "dotenv/config";
import express from "express";
import { Routers } from "./routers/Routers";

const app = express();
const port = Number(process.env.PORT) || 3050;

app.use(express.json());
app.use("/", Routers);

// app.get("/health", (_req, res) => {
//   res.json({ ok: true });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
