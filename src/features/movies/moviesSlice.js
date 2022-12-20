import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import credentials from "../common.js";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const options = {
    method: "GET",
    url: `${credentials.baseUrl}/title/v2/find`,
    params: { title: "men", limit: "9", sortArg: "moviemeter,asc" },
    headers: {
      "X-RapidAPI-Key": credentials.XRapidAPIKey,
      "X-RapidAPI-Host": credentials.XRapidAPIHost,
    },
  };

  const response = await axios(options);
  console.log(response.data.results);

  return response.data.results;
});

export const movieDescription = createAsyncThunk(
  "movies/movieDescription",
  async (id) => {
    const options = {
      method: "GET",
      url: `${credentials.baseUrl}/title/get-synopses`,
      params: {tconst: id},
      headers: {
        "X-RapidAPI-Key": credentials.XRapidAPIKey,
        "X-RapidAPI-Host": credentials.XRapidAPIHost,
      },
    };

    const response = await axios(options);
    console.log(response.data);

    return response.data;
  }
);

const initialState = {
  movies: {},
  movieDetails: {},
  similarMovies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log("agaya data basic api ka");
      return { ...state, movies: payload };
    },
    [movieDescription.fulfilled]: (state, { payload }) => {
      console.log("second API movie details data agaya");
      return { ...state,movieDetails: payload };
    },
  },
});

// 1st movies is the name of the movieSlice 2nd is the the initialState Name
export const getAllMovies = (state) => state.movies.movies;
export const getMovieDetails = (state) => state.movies.movieDetails;

export default movieSlice.reducer;
