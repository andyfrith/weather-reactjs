import { schemas } from "../../../generated/Weather";
import { z } from "zod";
import "./style.css";

type Weather = z.infer<typeof schemas.CurrentWeatherResponse>;

export function WeatherWidget({ weather }: { weather: Weather }) {
  const iconurl =
    "http://openweathermap.org/img/w/" + weather.weather.icon + ".png";

  return (
    <div className="weather-widget main-text">
      <div>
        <div className="weather-widget-title">Currently</div>
        <div className="weather-widget-current-temperature">
          {Math.round((weather.temperature.current * 9) / 5 + 32)}°F
        </div>
        <div className="weather-widget-main">{weather.weather.main}</div>
        <div className="weather-widget-max-min">
          {Math.round((weather.temperature.min * 9) / 5 + 32)} /{" "}
          {Math.round((weather.temperature.max * 9) / 5 + 32)}°F
        </div>
      </div>
      <div>
        <img
          className="weather-widget-image"
          src={iconurl}
          alt={weather.weather.icon}
        />
      </div>
    </div>
  );
}

export default WeatherWidget;
