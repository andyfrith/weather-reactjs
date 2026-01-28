// import { article as placeholderArticle } from "../data/placeholder";
import { schemas } from "../../generated/Weather";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { AIApi } from "../../generated";
import type { ArticleType } from "../types";
// import { aiTextDenver as placeholderAiText } from "../data/placeholder";

type Weather = z.infer<typeof schemas.CurrentWeatherResponse>;

type GetArticleQueryParams = {
  weather: Weather | undefined;
};

const getPrompt = (weather: Weather | undefined) => {
  return `The current weather forecast is ${JSON.stringify(
    weather,
  )}. Please create a "The Don't Miss Activities For Today" summary article for the current weather forecast and suggested activities for the provided location.  The style of the article should speak to a reader of Condé Nast Traveler (https://www.cntraveler.com/).  The reader has a love for extreme sports and the outdoors.  Additionally, the reader is stylish, sophisticated, adventurous and seeks excitement in sharing new travel experiences with others, seeking connections to the location, its people and fellow travelers.  The article should be 1000 words or less.`;
};

const getArticle = async (weather: Weather | undefined) => {
  console.log("getArticle: weather", weather);
  console.log("getArticle: prompt", getPrompt(weather));
  // return Promise.resolve(placeholderArticle);
  /* OLLAMA */
  const aiText = await AIApi.postAitext({
    prompt: getPrompt(weather),
  });
  return JSON.parse(aiText.text || "") as ArticleType;
  /* END OLLAMA */
  // const aiText = placeholderAiText;
  /* GEMINI
  // const jsonRegex = /```json\s*([\s\S]*?)\s*```/;
  // const match = aiText.text.match(jsonRegex);
  // return JSON.parse((match && match[1]) || "") as ArticleType;
  /* END GEMINI */
};

export const useGetArticle = (params: GetArticleQueryParams) => {
  return useQuery({
    queryKey: [
      "article",
      params &&
        params.weather &&
        params.weather.location &&
        params.weather.location.name,
    ],
    queryFn: () => getArticle(params && params.weather),
    enabled: !!(params && params.weather),
  });
};
