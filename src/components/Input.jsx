import React from "react";
import { useWeather } from "../context/Weather";

export const Input = () => {
    const weather = useWeather()
    return (
        <input 
            className="search-input" 
            placeholder="Enter city name" 
            value={weather.searchCity} 
            onChange={(e) => weather.setSearchCity(e.target.value)}
        />
    )
}