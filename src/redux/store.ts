import { configureStore } from "@reduxjs/toolkit";
import articlesSliceReducer from "./articles/articles-slice";

export const store = configureStore({
  reducer: {
    articles: articlesSliceReducer
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;