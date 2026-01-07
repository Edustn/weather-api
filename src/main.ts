import { Router, type Request, type Response } from "express";
import { Routers } from "./routers/Routers";

const router = Router();

router.use("/weather", Routers);

