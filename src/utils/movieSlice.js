import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayMovies: null,
        PopularMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
    },
    reducers: {
        addNowPlayMovies: (state, action) => {
            state.nowPlayMovies = action.payload;

        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

    }
});
export const { addNowPlayMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;