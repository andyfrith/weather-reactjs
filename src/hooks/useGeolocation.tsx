import { useState, useEffect } from "react";

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

/**
 * Custom hook to get the user's geolocation coordinates
 * @returns GeolocationState with latitude, longitude, error, and loading status
 */
const useGeolocation = (): GeolocationState => {
  const isSupported =
    typeof navigator !== "undefined" && !!navigator.geolocation;

  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: isSupported ? null : "Geolocation is not supported by your browser",
    loading: isSupported,
  });

  useEffect(() => {
    if (!isSupported) {
      return;
    }

    const successHandler = (position: GeolocationPosition) => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        loading: false,
      });
    };

    const errorHandler = (error: GeolocationPositionError) => {
      setState({
        latitude: null,
        longitude: null,
        error: error.message,
        loading: false,
      });
    };

    // Request the geolocation
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, [isSupported]);

  return state;
};

export default useGeolocation;
