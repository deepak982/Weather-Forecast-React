import './App.css';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather()
  
  useEffect(() => {
    //Get Current Location
    weather.fetchCurrentUserLocation()
  }, [])

  return (
    <div className="weather-container">
      <header className="weather-header">
        <h1 className="weather-title">Weather Forecast</h1>
        <p className="weather-subtitle">Enter a city to get the current weather</p>
      </header>
      <form className="search-form" onSubmit={(e) => { e.preventDefault(); weather.fetchData(); }}>
        <Input />
        <Button onClick={weather.fetchData} value="Search" className="search-button" />
      </form>
      <Card />
      <Button value="Refresh" className="refresh-button" onClick={weather.fetchData} />
    </div>
  );
}

export default App;