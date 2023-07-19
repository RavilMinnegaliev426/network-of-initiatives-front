import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ChekoutState {
  value: boolean;
}

const initialState: ChekoutState = {
  value: false,
};

export const chekoutSclice = createSlice({
  name: "chekoutSclice",
  initialState,
  reducers: {
    setChekout: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setChekout } = chekoutSclice.actions;
export default chekoutSclice.reducer;
