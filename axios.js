import axios from "axios";
import { setDefaultWeather } from "./redux/weather.slice";
export const handleSearch = (city) => async (dispatch) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: city ? city : "Sydney",
      days: "5",
    },
    headers: {
      "X-RapidAPI-Key": "248de94f44mshef0e6efb0ba66fbp1abdafjsn2422e43de92f",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    dispatch(setDefaultWeather(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
