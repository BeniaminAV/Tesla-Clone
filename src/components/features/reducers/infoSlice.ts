import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState = {
  infoS: [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Model S Accesories",
    "Model 3 Accesories",
    "Model X Accesories",
    "Model Y Accesories",
    "Charging",
  ],
};

const infoSlice = createSlice({
  name: "infoS",
  initialState,
  reducers: {},
});

export const selectInfo = (state: RootState) => state.info.infoS;
export default infoSlice.reducer;
