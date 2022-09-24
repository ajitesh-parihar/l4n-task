import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "../features/homepage/dataApi";

export const store = configureStore({
  reducer: {
    // data: dataReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});
