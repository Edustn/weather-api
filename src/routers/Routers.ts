import axios from 'axios';
import dotenv from 'dotenv';
import { Router, type Request, type Response } from "express";

dotenv.config();

const router = Router();

const BASE_URL = process.env.BASE_URL;

router.get('/weather', (req: Request, res: Response) => {
    const city = req.body.city;
    axios.get(`${BASE_URL}${city}?key=${process.env.API_KEY}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        });
});

export { router as Routers };