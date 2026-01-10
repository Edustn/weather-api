import axios from 'axios';

class WeatherClient {
    async fetchWeather(city: string) {
        const baseUrl = process.env.BASE_URL;
        const apiKey = process.env.API_KEY;

        const url = `${baseUrl}${city}?key=${apiKey}`;
        const response = await axios.get(url);
        return response.data;
    }
}

export default WeatherClient;
