import { useContext } from "react";
import { AppWeatherContext } from "../../App";

const CurrentWeatherTile = () => {
  const { currentWeather } = useContext(AppWeatherContext);

  return (
    <div className="p-5 bg-light-blue">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className="font-size-24 mb-0">Today</p>
        <div className="d-flex align-items-center">
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${currentWeather.weather[0].icon}.png`}
          />
          <div>
            <p className="temperature-text">
              {Math.round(currentWeather.main.temp)}&deg;
            </p>
            <p className="font-size-24 mb-0">
              {currentWeather.weather[0].main}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherTile;
