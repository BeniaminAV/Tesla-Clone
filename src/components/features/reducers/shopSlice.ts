import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState = {
  shops: [
    "Model S Accesories",
    "Model 3 Accesories",
    "Model X Accesories",
    "Model Y Accesories",
    "Charging",
  ],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export const selectShop = (state: RootState) => state.shop.shops;
export default shopSlice.reducer;
