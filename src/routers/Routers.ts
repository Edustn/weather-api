import { Router } from "express";
import WeatherController from "../controller/WeatherController";

const router = Router();
const controller = new WeatherController();

router.get("/", (req, res) => controller.getWeather(req, res));

export { router as Routers };