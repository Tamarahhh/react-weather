import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        className="input-search"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="current-weather">
          <div className="weather-update">
            <h1 className="current-city" id="current-city">
              {city}
            </h1>
            <p>
              Tuesday 15:00
              <br />
              {weather.description}
            </p>
            <img
              className="temp-emoji"
              src={weather.icon}
              alt={weather.description}
            />
            <span className="temp-value">
              {Math.round(weather.temperature)}
            </span>
            <span className="temp-unit">°C</span>
          </div>
          <div className="current-temp">
            <span id="icon"></span>
            <p className="current-update">
              <span id="current-date"></span>
              <br />
              <span id="description"></span>
              <br />
              Humidity: {weather.humidity}%<strong id="humidity"></strong>
              <br />
              Wind: {weather.wind}km/h
              <strong id="wind"></strong>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather-app">
        {form}
        <div class="current-weather">
          <div class="weather-update">
            <h1 class="current-city" id="current-city">
              Paris
            </h1>
            <p>
              Tuesday 15:00
              <br />
              Cloudy
            </p>
            <p className="temp-emoji">⛅</p>
            <span class="temp-value">30</span>
            <span class="temp-unit">°C</span>
          </div>
          <div class="current-temp">
            <span id="icon"></span>
            <p class="current-update">
              <span id="current-date"></span>
              <br />
              <span id="description"></span>
              <br />
              Humidity: 80%
              <strong id="humidity"></strong>
              <br />
              Wind: 10 km/h
              <strong id="wind"></strong>
            </p>
          </div>
        </div>
        <div class="weather-prediction" id="prediction"></div>
      </div>
    );
  }
}
