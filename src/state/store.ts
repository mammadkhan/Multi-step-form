import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import pageSlice from "./pageSlice";

export const store = configureStore({
  reducer: {
    page: pageSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
