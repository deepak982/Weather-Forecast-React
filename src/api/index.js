const baseURL = 'https://api.weatherapi.com/v1/current.json?key=3a8ecc52eb76476da83171659240410'

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()  
}

export const getWeatherDataForUserLocation = async (lat, log) => {
    const response = await fetch(`${baseURL}&q=${lat},${log}&aqi=yes`)
    return await response.json()  
}