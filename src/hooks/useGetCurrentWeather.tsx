import { useQuery } from "@tanstack/react-query";
// import { weather } from "../data/placeholder";
import { WeatherApi } from "../../generated/Weather";

type GetCurrentWeatherQueryParams = {
  city: string;
};

export const useGetCurrentWeather = (params: GetCurrentWeatherQueryParams) => {
  return useQuery({
    queryKey: ["currentWeather", params.city],
    queryFn: async () => {
      const response = await WeatherApi.getWeathercurrent({
        queries: {
          city: params.city,
        },
      });
      return response;
    },
    // Promise.resolve({
    //   data: weather,
    // }),

    enabled: params.city !== "",
  });
};
