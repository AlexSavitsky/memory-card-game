import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  amountCards: 2,
  pace: 'easy'
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    amountCardsInc: (state) => {
      state.amountCards++;
    },
    amountCardsDec: (state) => {
        state.amountCards--;
      },
    changePace: (state, action) => {
      state.pace = action.payload;
    },
  },
});

const { actions, reducer } = settingsSlice;

export default reducer;

export const {amountCardsInc, amountCardsDec, changePace} = actions;
