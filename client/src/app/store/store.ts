import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});
