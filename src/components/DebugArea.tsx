import { schemas } from "../../generated/Weather";
import { z } from "zod";

type Weather = z.infer<typeof schemas.CurrentWeatherResponse>;

export default function DebugArea({
  weather,
  loading,
  error,
  latitude,
  longitude,
  //   onFetchAiText,
  summary,
}: {
  weather: Weather;
  loading: boolean;
  error: string | null;
  latitude: number | null;
  longitude: number | null;
  //   onFetchAiText: () => void;
  summary?: string | null;
}) {
  //   type Weather = z.infer<typeof schemas.CurrentWeatherResponse>;

  return (
    <div className="debug-area">
      <div className="api-response">
        <p className="api-response-text">Current Weather Response</p>
        <p className="api-response-text">
          {weather && JSON.stringify(weather)}
        </p>
        <p className="api-response-text">{loading && `Loading...`}</p>
        <p className="api-response-text">
          {error && `Error: ${JSON.stringify(error)}`}
        </p>
        <p className="api-response-text">
          {latitude &&
            longitude &&
            `Browser location: ${latitude}, ${longitude}`}
        </p>
      </div>
      <div className="card">
        {/* <button onClick={onFetchAiText}>Fetch AI Text</button> */}
      </div>
      <p className="api-response-text">{summary && `${summary}`}</p>
    </div>
  );
}
