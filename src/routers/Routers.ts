import { Router } from "express";
import AuthController from "../controller/AuthController";
import WeatherController from "../controller/WeatherController";

const router = Router();
const controller = new WeatherController();
const authController = new AuthController();

router.post("/auth/login", (req, res) => authController.login(req, res));
router.get("/", (req, res) => controller.getWeather(req, res));

export { router as Routers };
