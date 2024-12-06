import { createSlice } from "@reduxjs/toolkit";
import { setEmployeesDataR, setToggleMenuR } from "./reducer";

export interface IParadsieAppInitialState {
  toggleMenu: boolean;
}

const paradiseSlice = createSlice({
  name: "paradiseapp",
  initialState: {
    toggleMenu: false,
    employeesData: []
  },
  reducers: {
    setToggleMenu: setToggleMenuR,
    setEmployeedData: setEmployeesDataR
  }
});

export const { setToggleMenu } = paradiseSlice.actions;

export default paradiseSlice.reducer;