import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState = {
  customs: ["ModelS", "Model3", "ModelX", "ModelY"],
};

const customSlice = createSlice({
  name: "custom",
  initialState,
  reducers: {},
});

export const selectCustom = (state: RootState) => state.custom.customs;
export default customSlice.reducer;
