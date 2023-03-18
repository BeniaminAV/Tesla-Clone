import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./reducers/carSlice";
import shopReducer from "./reducers/shopSlice";
import infoReducer from "./reducers/infoSlice";
import customReducer from "./reducers/customSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    shop: shopReducer,
    info: infoReducer,
    custom: customReducer,
  },
});

export const rootReducer = {
  car: carReducer,
  shop: shopReducer,
  info: infoReducer,
  custom: customReducer,
  // adaugă și alte reduceri aici, dacă e cazul
};

export type RootState = ReturnType<typeof store.getState>;

export default { infoReducer, shopReducer, carReducer, customReducer };
