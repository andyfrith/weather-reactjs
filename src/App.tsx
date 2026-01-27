import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Explore from "./components/explore/Explore";
import { useGetArticle } from "./hooks/useGetArticle";
import { useGetCurrentWeather } from "./hooks/useGetCurrentWeather";
import { useGetCityImages } from "./hooks/useGetCityImages";
import WeatherWidget from "./components/weatherWidget/WeatherWidget";
import Quote from "./components/quote/Quote";
import Article from "./components/article/Article";

function App() {
  const [city, setCity] = useState<string>("");
  const {
    data: currentWeather,
    isLoading: isCurrentWeatherLoading,
    error: currentWeatherError,
  } = useGetCurrentWeather({ city });
  const {
    data: cityImages,
    isLoading: isCityImagesLoading,
    error: cityImagesError,
  } = useGetCityImages({ city });
  const {
    data: article,
    isLoading: isArticleLoading,
    error: articleError,
  } = useGetArticle({
    weather: currentWeather,
  });

  if (articleError || currentWeatherError || cityImagesError) {
    return (
      <div className="text-center text-2xl text-black">
        Error:{" "}
        {articleError?.message ||
          currentWeatherError?.message ||
          cityImagesError?.message}
      </div>
    );
  }

  if (isCurrentWeatherLoading || isCityImagesLoading || isArticleLoading) {
    return <div className="text-center text-2xl text-black">Loading...</div>;
  }

  if (!currentWeather) {
    return (
      <div className="text-center text-2xl text-black">
        <Explore onExploreCity={setCity} />
      </div>
    );
  }

  return (
    <>
      {article && cityImages && (
        <Hero
          title={article.title}
          // eslint-disable-next-line react-hooks/purity
          imageUrl={cityImages[Math.floor(Math.random() * cityImages.length)]}
        />
      )}
      {currentWeather && (
        <main className="article-content">
          {article && <Article article={article} cityImages={cityImages} />}
          <aside className="sidebar">
            {article && <Quote quote={article.sidebarQuote} />}
            {currentWeather && <WeatherWidget weather={currentWeather} />}
            <Explore onExploreCity={setCity} />
          </aside>
        </main>
      )}
    </>
  );
}

export default App;
