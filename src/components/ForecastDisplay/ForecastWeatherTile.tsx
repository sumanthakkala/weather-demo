import { useContext } from "react";
import { AppWeatherContext } from "../../App";

interface Props {
  forecast: any;
}

const CompactWeatherTile = ({ forecast }: Props) => {
  const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "N/A"];

  const forecastDate = forecast?.dt_txt
    ? new Date(forecast?.dt_txt).getDay()
    : 7;

  return (
    <div className="p-4 bg-light-blue">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className="font-size-24 mb-0">{WEEK_DAYS[forecastDate]}</p>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${forecast.weather[0].icon}.png`}
        />
        <p className="temperature-text">{forecast.main.temp}&deg;</p>
      </div>
    </div>
  );
};

export default CompactWeatherTile;
