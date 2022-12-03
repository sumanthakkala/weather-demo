import { useContext, useEffect, useState } from "react";
import ForecastWeatherTile from "./ForecastWeatherTile";
import CurrentWeatherTile from "./CurrentWeatherTile";
import { AppWeatherContext } from "../../App";

const ForecastDisplay = () => {
  const [forecastList, setForecastList] = useState<any[]>([]);
  const { currentWeather, forecast } = useContext(AppWeatherContext);

  useEffect(() => {
    forecast &&
      (() => {
        const list = [
          // Randomly selected times of different days
          // Because this api gives 3hr forecast for 5 days
          forecast.list[4],
          forecast.list[12],
          forecast.list[20],
          forecast.list[28],
        ];
        setForecastList(list);
      })();
    console.log(forecast);
  }, [forecast]);

  const errorText = (
    <div className="col-12 d-flex justify-content-center">
      <p>Something went wrong...</p>
    </div>
  );

  return (
    <div className="border border-4 border-white rounded mx-4 bg-white shadow">
      <div className="row g-1">
        {currentWeather ? (
          <div className="col-12">
            <CurrentWeatherTile />
          </div>
        ) : (
          errorText
        )}

        {forecast ? (
          <>
            {forecastList.map((item: any) => {
              return (
                <div className="col-xs-12 col-sm-3">
                  <ForecastWeatherTile forecast={item} />
                </div>
              );
            })}
          </>
        ) : (
          errorText
        )}
      </div>
    </div>
  );
};

export default ForecastDisplay;
