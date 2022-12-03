import React from "react";
import { CityType } from "../types";

interface CitySelectorProps {
  selectedCity: CityType;
  onCityChange: (city: CityType) => void;
}
const CitySelector = (props: CitySelectorProps) => {
  const { onCityChange, selectedCity } = props;
  return (
    <div className="row px-5 py-4">
      <button
        className={`bg-transparent border-0 col col-xs-12 city-text ${
          selectedCity === "ottawa" ? "bold-blue-font" : "text-dark"
        }`}
        onClick={() => onCityChange("ottawa")}
      >
        OTTAWA
      </button>
      <button
        className={`bg-transparent border-0 col col-xs-12 city-text ${
          selectedCity === "moscow" ? "bold-blue-font" : "text-dark"
        }`}
        onClick={() => onCityChange("moscow")}
      >
        MOSCOW
      </button>
      <button
        className={`bg-transparent border-0 col col-xs-12 city-text ${
          selectedCity === "tokyo" ? "bold-blue-font" : "text-dark"
        }`}
        onClick={() => onCityChange("tokyo")}
      >
        TOKYO
      </button>
    </div>
  );
};

export default CitySelector;
