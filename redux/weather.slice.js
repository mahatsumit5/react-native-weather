import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deafaultweather: {},
  loading: false,
  modalVisible: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setDefaultWeather: (state, { payload }) => {
      state.deafaultweather = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setModalVisible: (state, { payload }) => {
      state.modalVisible = payload;
    },
  },
});

const { reducer, actions } = weatherSlice;
export const { setDefaultWeather, setLoading, setModalVisible } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
