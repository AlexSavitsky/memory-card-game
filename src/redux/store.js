import { configureStore } from "@reduxjs/toolkit";
import { settingsSlice } from "./slice/settingsSlice";
import { gameProcessSlice } from "./slice/gameProcessSlice";
import { timerSlice } from "./slice/timerSlice";

const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
    gameProcess: gameProcessSlice.reducer,
    timer: timerSlice.reducer
  },
});

export default store;
