import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seconds: 0,
  minutes: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setSeconds: (state, action) => {
      state.seconds = action.payload;
    },
    setMinutes: (state, action) => {
      state.minutes = action.payload;
    },
  },
});

const { actions, reducer } = timerSlice;

export default reducer;

export const { setSeconds, setMinutes } = actions;
