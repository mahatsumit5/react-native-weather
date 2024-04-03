import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather.slice";
const store = configureStore({
  reducer: {
    weatherData: weatherReducer,
  },
});

export default store;
