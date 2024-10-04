import React from "react";
import { useWeather } from "../context/Weather";

export const Card = () => {
    const weather = useWeather()
    return (
        <div className="weather-card">
            <h2 className="weather-condition">{weather?.data?.current?.condition?.text}</h2>
            <img className="weather-icon" src={weather?.data?.current?.condition?.icon} alt="Weather icon" />
            <h2 className="weather-temp">{weather?.data?.current?.temp_c}°C</h2>
            <h5 className="weather-location">{weather?.data?.location?.name}, {weather?.data?.location?.region}</h5>
        </div>
    )
}