import { useState } from "react";
import "./App.css";
import { WeatherApi } from "../generated";
import { schemas } from "../generated/Weather";
import { z } from "zod";

type Weather = z.infer<typeof schemas.CurrentWeatherResponse>;

function App() {
  const [weather, setWeather] = useState<Weather>();

  const onFetchWeather = async () => {
    const currentWeather = await WeatherApi.getWeathercurrent({
      queries: {
        city: "London",
      },
    });
    setWeather(currentWeather);
  };

  return (
    <>
      <h1>OpenAPI Zod Client</h1>
      <div className="card">
        <button onClick={onFetchWeather}>Fetch Weather</button>
      </div>
      <p className="read-the-docs">{weather && weather.location.name}</p>
      <>{weather && JSON.stringify(weather)}</>
    </>
  );
}

export default App;
