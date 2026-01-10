import WeatherClient from "../client/weatherClient";

class WeatherService {
    private client = new WeatherClient();

    async getWeather(city: string) {
        return this.client.fetchWeather(city);
    }  
}


export default WeatherService;