import { configureStore } from "@reduxjs/toolkit";
import chekoutSclice from "../slice/chekoutSclice";

export const store = configureStore({
  reducer: {
    chekout: chekoutSclice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
