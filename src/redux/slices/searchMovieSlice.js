import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    searchResult: [],
    keyword: "",
    page: 1,
    total_pages: 0,
    isLoading: false,
}

export const getMovielist = createAsyncThunk(
    "searchMovie/getBooklist",
    async (_, thunkAPI) => {
        const keyword = thunkAPI.getState().searchMovie.keyword;
        const page = thunkAPI.getState().searchMovie.page;

        let res;
        if (keyword.trim().length === 0) {
            res = await axios.get(
                window.config.movie_discover + `&page=${page}`
            )
        } else {
            res = await axios.get(
                window.config.movie_search + `&query=${keyword}&page={page}`
            )
        }
        return res.data;
    }
);

export const changePage = createAsyncThunk(
    "searchMovie/changePage",
    async (pageNum, thunkAPI) => {
        const keyword = thunkAPI.getState().searchMovie.keyword;

        let res;
        if (keyword.trim().length === 0) {
            res = await axios.get(
                window.config.movie_discover + `&page=${pageNum}`
            )
        } else {
            res = await axios.get(
                window.config.movie_search + `&query=${keyword}&page=${pageNum}`
            )
        }
        return res.data;
    }
);

const searchMovieSlice = createSlice({
    name: "searchMovie",
    initialState,
    reducers: {
        updateKeyword: (state, action) => {
            state.keyword = action.payload;
        },
    },
    extraReducers: {
        [getMovielist.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMovielist.fulfilled]: (state, action) => {
            state.searchResult = action.payload.results;
            state.total_pages = action.payload.total_pages;
            state.isLoading = false;
        },
        [getMovielist.rejected]: (state, action) => {
            state.isLoading = false;
        },
        [changePage.pending]: (state, action) => {
            state.isLoading = true;
        },
        [changePage.fulfilled]: (state, action) => {
            const pageNum = action.meta.arg;
            state.searchResult = action.payload.results;
            state.total_pages = action.payload.total_pages;
            state.isLoading = false;
            state.page = pageNum;
        },
        [changePage.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
})

const searchMovieReducer = searchMovieSlice.reducer;
export default searchMovieReducer;

export const { updateKeyword } = searchMovieSlice.actions;