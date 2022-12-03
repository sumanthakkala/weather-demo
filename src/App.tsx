import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CityType } from "./types";
import { CitySelector, ForecastDisplay } from "./components";

const latLonMap = {
  ottawa: {
    lat: 45.41,
    lon: -75.7,
  },
  moscow: {
    lat: 55.75,
    lon: 37.62,
  },
  tokyo: {
    lat: 35.69,
    lon: 139.69,
  },
};

interface WeatherContext {
  currentWeather: any;
  forecast: any;
}

export const AppWeatherContext = createContext<WeatherContext>({
  currentWeather: undefined,
  forecast: undefined,
});

function App() {
  const [city, setCity] = useState<CityType>("ottawa");
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();

  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const apiUrl = import.meta.env.VITE_WEATHER_API_URL;

  const onCityChange = (activeCity: CityType) => {
    setCity(activeCity);
  };

  useEffect(() => {
    fetchWeatherDetails();
  }, [city]);

  const fetchWeatherDetails = () => {
    setIsLoading(true);
    const latLon = latLonMap[city];
    const { lat, lon } = latLon;
    const currentWeatherFetch = fetch(
      `${apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const forecastFetch = fetch(
      `${apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather(weatherResponse);
        setForecast(forcastResponse);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        alert("Error fetching weather data. Please reload.");
      });
  };

  return (
    <div className="App">
      {isLoading ? (
        <div
          className={`d-flex align-items-center justify-content-center vh-100`}
        >
          <div className="spinner" />
        </div>
      ) : (
        <>
          <CitySelector selectedCity={city} onCityChange={onCityChange} />
          <AppWeatherContext.Provider value={{ currentWeather, forecast }}>
            <ForecastDisplay />
          </AppWeatherContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
