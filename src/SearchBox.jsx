import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {

    let[city, setCity] = useState("");
    let[error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e35c4a444f87b99fc5232f53654d0b7f";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
        
            let result = {
                city: city,
                feelsLike: jsonResponse.main.feels_like,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            setError(false);
            return result;
        }
        catch(err) {
            throw err;
            };
        }
    



let handleChange = (e) => {
    setCity(e.target.value);
};

let handleSubmit = async(e) => {
    try{
        e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
    catch(err) {
        setError(true);
    }
}

  return (
    <div className="searchBox">
        
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" >Search</Button>
            {error && <p style={{color: 'red'}}>No such place exists in our API, Please try again.</p>}
        </form>
    </div>
  );
}




// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Autocomplete from "@mui/material/Autocomplete";
// import "./SearchBox.css";

// export default function SearchBox({ updateInfo }) {
//   const [city, setCity] = useState("");
//   const [options, setOptions] = useState([]);
//   const [error, setError] = useState(false);

//   const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
//   const GEO_API = "https://api.openweathermap.org/geo/1.0/direct";
//   const API_KEY = "e35c4a444f87b99fc5232f53654d0b7f";

//   // 🔍 Fetch suggestions as user types
//   const fetchSuggestions = async (value) => {
//     if (!value || value.length < 2) {
//       setOptions([]);
//       return;
//     }
//     try {
//       const res = await fetch(
//         `${GEO_API}?q=${value}&limit=5&appid=${API_KEY}`
//       );
//       const data = await res.json();
//       setOptions(data);
//     } catch (err) {
//       console.error("Error fetching suggestions:", err);
//     }
//   };

//   // 🌦️ Fetch weather for selected city
//   const getWeatherInfo = async (cityObj) => {
//     try {
//       const response = await fetch(
//         `${WEATHER_API}?lat=${cityObj.lat}&lon=${cityObj.lon}&appid=${API_KEY}&units=metric`
//       );
//       const jsonResponse = await response.json();

//       let result = {
//         city: jsonResponse.name,
//         feelsLike: jsonResponse.main.feels_like,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         weather: jsonResponse.weather[0].description,
//       };

//       setError(false);
//       return result;
//     } catch (err) {
//       throw err;
//     }
//   };

//   // When user submits search
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!city) return;

//     try {
//       const newInfo = await getWeatherInfo(city);
//       updateInfo(newInfo);
//       setCity("");
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="searchBox">
//       <form onSubmit={handleSubmit}>
//         <Autocomplete
//           freeSolo
//           options={options}
//           getOptionLabel={(option) =>
//             option.name
//               ? `${option.name}${option.state ? ", " + option.state : ""}, ${
//                   option.country
//                 }`
//               : ""
//           }
//           onInputChange={(event, newInputValue) => {
//             fetchSuggestions(newInputValue);
//           }}
//           onChange={(event, newValue) => {
//             setCity(newValue);
//           }}
//           renderInput={(params) => (
//             <TextField {...params} label="City Name" variant="outlined" required />
//           )}
//         />
//         <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//         {error && (
//           <p style={{ color: "red" }}>
//             No such place exists in our API, Please try again.
//           </p>
//         )}
//       </form>
//     </div>
//   );
// }
