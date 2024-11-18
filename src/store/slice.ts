import { createSlice } from "@reduxjs/toolkit";
import { setToggleMenuR } from "./reducer";

export interface IParadsieAppInitialState {
  toggleMenu: boolean;
}

const paradiseSlice = createSlice({
  name: "paradiseapp",
  initialState: {
    toggleMenu: false
  },
  reducers: {
    setToggleMenu: setToggleMenuR
  }
});

export const { setToggleMenu } = paradiseSlice.actions;

export default paradiseSlice.reducer;