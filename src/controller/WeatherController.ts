import { Request, Response } from "express";
import WeatherService from "../service/WeatherService";

class WeatherController {
    private service = new WeatherService();

    async getWeather(req: Request, res: Response) {
        const city = req.params.city;
        const weather = await this.service.getWeather(city);
        res.json(weather);
    }   
}

export default WeatherController;
