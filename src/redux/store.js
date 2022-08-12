import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoriteSlice";
import searchMovieReducer from "./slices/searchMovieSlice";

export const store = configureStore({
    reducer: {
        searchMovie: searchMovieReducer,
        favorite: favoriteReducer
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
    }
})