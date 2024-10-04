import React, {useContext,createContext,useState} from "react";
import {getWeatherDataForCity, getWeatherDataForUserLocation} from "../api/index"

export const WeaterContext = createContext(null)

export const useWeather = () => {
    return useContext(WeaterContext)
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null)
    const [searchCity, setSearchCity] = useState(null)

    const fetchData = async () => {
        const response = await getWeatherDataForCity(searchCity)
        setData(response)
    }

    const fetchCurrentUserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForUserLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then((res) => {
                setData(res)
            })
        })
    }

    return (
        <WeaterContext.Provider value={{data, searchCity, setSearchCity, fetchData, fetchCurrentUserLocation}}>
            {props.children}
        </WeaterContext.Provider>
    )
}