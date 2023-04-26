import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [cityName, setCityName] = useState("");
  const getWeatherHandler = () => {
    if (!cityName) {
      return alert("لطفا نام شهر خود را وارد نمایید!");
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=119da8c7c7c7b3886334214b4ddf4410`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== "404") {
          setWeatherDetails(response);
        } else {
          alert("شهر مورد نظر پیدا نشد!");
        }
      });
  };

  return (
    <div className="App">
      <div>
        <input
          name="cityName"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <button onClick={getWeatherHandler}>get weather</button>
      <p>{weatherDetails ? weatherDetails.coord.lat : "nayamade"}</p>
      true && true = true true && false = false false && false = false
      {weatherDetails && (
        <table>
          <tr>
            <td>نام شهر: {cityName}</td>
          </tr>
          <tr>
            <td>دمای هوا: {weatherDetails.main.temp}</td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      )}
      {weatherDetails && <p> {weatherDetails.coord.lon}</p>}
    </div>
  );
}

export default App;
