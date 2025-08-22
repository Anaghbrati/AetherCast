import { useState, useEffect } from 'react';
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';


export default function WeatherApp() {

    const[weatherInfo, setWeatherInfo] = useState({
    city: "Loading...",
    feelsLike: 0,
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    weather: "Fetching...",
  });

    useEffect(() => {
    // Try to get location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        // Fetch weather using OpenWeather API
        let apiKey = "e35c4a444f87b99fc5232f53654d0b7f";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        try {
          let res = await fetch(url);
          let data = await res.json();

          setWeatherInfo({
            city: data.name,
            feelsLike: data.main.feels_like,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            weather: data.weather[0].description,
          });
        } catch (err) {
          console.error("Failed to fetch weather:", err);
        }
      },
      (err) => {
        console.error("Location access denied:", err);
        // fallback KOLKATA weather
        setWeatherInfo({
          city: "Kolkata",
          feelsLike: 24.84,
          temp: 25.05,
          tempMin: 24.84,
          tempMax: 25.05,
          humidity: 78,
          weather: "clear sky",
        });
      }
    );
  }, []);

    let updateInfo= (newInfo) => {
        setWeatherInfo(newInfo);
    }

    let backgroundVideo =
        weatherInfo.humidity > 80
            ? "/videos/rainy.mp4"
            : weatherInfo.temp > 20
            ? "/videos/summer.mp4"
            : "/videos/winter.mp4";

  return (
    <div  style={{ textAlign: 'center'}}>
        <h2 style={{color: 'black'}}>Weather Tracker</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
    
  );
}
