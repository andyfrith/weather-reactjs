export default function Explore({
  onExploreCity,
}: {
  onExploreCity: (city: string) => void;
}) {
  return (
    <div className="explore">
      <div className="card">
        <button
          className="explore-button"
          onClick={() => onExploreCity("Denver")}
        >
          Explore Denver
        </button>
        <button
          className="explore-button"
          onClick={() => onExploreCity("New York")}
        >
          Explore New York
        </button>
        <button
          className="explore-button"
          onClick={() => onExploreCity("Los Angeles")}
        >
          Explore Los Angeles
        </button>
        <button
          className="explore-button"
          onClick={() => onExploreCity("Seattle")}
        >
          Explore Seattle
        </button>
        {/* <button
          className="explore-button"
          onClick={onFetchWeatherForCurrentLocation}
        >
          Explore Current Location
        </button> */}
      </div>
    </div>
  );
}
