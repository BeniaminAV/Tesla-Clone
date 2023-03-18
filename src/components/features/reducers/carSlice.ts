import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState = {
  selectedCar: null,
  cars: ["Model 3", "Model Y", "Model S", "Model X"],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { selectCar } = carSlice.actions;

export const selectSelectedCar = (state: RootState) => state.car.selectedCar;

export default carSlice.reducer;
