import { useQuery } from "@tanstack/react-query";

type GetCityImagesQueryParams = {
  city: string;
};

const getCityImages = async (location: string) => {
  const filename = `../unsplash/data/search/photos/${location
    .toLowerCase()
    .replaceAll(" ", "-")}.json`;
  return import(/* @vite-ignore */ filename).then(({ default: fileData }) => {
    const images = fileData.results.map(
      (result: { urls: { regular: string } }) => result.urls.regular,
    );
    return Promise.resolve(images);
  });
};

export const useGetCityImages = (params: GetCityImagesQueryParams) => {
  return useQuery({
    queryKey: ["cityImages", params.city],
    queryFn: () => getCityImages(params.city),
    enabled: params.city !== "",
  });
};
