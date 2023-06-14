import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  win: false,
  gameProcess: false,
  amountClicks: 0,
};

export const gameProcessSlice = createSlice({
  name: "gameProcess",
  initialState,
  reducers: {
    setGameProcess: (state, action) => {
      state.gameProcess = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    amountClickInc: (state) => {
      state.amountClicks++;
    },
    amountClickReset: (state) => {
      state.amountClicks = 0;
    }  
  },
});

const { actions, reducer } = gameProcessSlice;

export default reducer;

export const { setGameProcess, setScore, amountClickInc, amountClickReset} = actions;
