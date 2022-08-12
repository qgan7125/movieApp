import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    favoritelist: [],
    favoriteForCurPage: [],
    totalItems: 0, //total number of books
    startIndex: 0,
    maxResults: 5,
}

export const getFavoritelist = createAsyncThunk(
    "favorite/getFavoritelist",
    async () => {
        const newFavoritelist = JSON.parse(localStorage.getItem("favoritelist") || "[]"); //undefined null, false 0 []
        return newFavoritelist;
    }
);

export const addovieToFavoritelist = createAsyncThunk(
    "favorite/addMovieToFavoritelist",
    async (newMovie, thunkAPI) => {
        const prevFavoritelist = thunkAPI.getState().favorite.favoritelist;
        let nextfavoritelist;
        if (prevFavoritelist.some((movie) => movie.id === newMovie.id)) {
            nextfavoritelist = [...prevFavoritelist];
        } else {
            nextfavoritelist = [newMovie, ...prevFavoritelist];
        }
        localStorage.setItem("favoritelist", JSON.stringify(nextfavoritelist));
        return nextfavoritelist;
    }
);

export const deleteMovieFromFavoritelist = createAsyncThunk(
    "favorite/deleteMovieFromFavoritelist",
    async (targetIndex, thunkAPI) => {
        const prevMovielist = thunkAPI.getState().favorite.favoritelist;
        const nextMovielist = prevMovielist.filter(
            (book, index) => index !== targetIndex
        );
        localStorage.setItem("favoritelist", JSON.stringify(nextMovielist));
        return nextMovielist;
    }
);

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getFavoritelist.pending]: (state, action) => {
            //nothing
        },
        [getFavoritelist.fulfilled]: (state, action) => {
            state.favoritelist = action.payload;
            state.favoriteForCurPage = action.payload.slice(0, state.maxResults)
            state.totalItems = action.payload.length;
            state.startIndex = 0;
        },
        [getFavoritelist.rejected]: (state, action) => {
            alert("get movielist failed!");
        },
        [addovieToFavoritelist.pending]: (state, action) => {
            //nothing
        },
        [addovieToFavoritelist.fulfilled]: (state, action) => {
            state.favoritelist = action.payload;
            state.totalItems = action.payload.length;
            state.startIndex = 0;
        },
        [addovieToFavoritelist.rejected]: (state, action) => {
            alert("add Movie to Favorite failed!");
        },
        [deleteMovieFromFavoritelist.pending]: (state, action) => {
            //nothing
        },
        [deleteMovieFromFavoritelist.fulfilled]: (state, action) => {
            /*       const targetIndex = action.meta.arg;
            if(targetIndex === totalItems - 1 &&) */
            state.favoritelist = action.payload;
            state.favoriteForCurPage = action.payload.slice(0, state.maxResults)
            state.totalItems = action.payload.length;
            state.startIndex = 0;
        },
        [deleteMovieFromFavoritelist.rejected]: (state, action) => {
            alert("delete movie to Favorite failed!");
        }
    }
})

const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;