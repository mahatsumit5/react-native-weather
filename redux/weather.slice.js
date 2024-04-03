import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deafaultweather: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setDefaultWeather: (state, { payload }) => {
      state.deafaultweather = payload;
    },
  },
});

const { reducer, actions } = weatherSlice;
export const { setDefaultWeather } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
