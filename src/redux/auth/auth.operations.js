import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import { apiUrl, showApiUrl } from "../../services/api.js";
// axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// axios.defaults.baseURL = "https://localhost:8000";
import registerUser from '../../api/users/registerUser.js';
import loginUser from "../../api/users/loginUser.js";
import logoutUser from "../../api/users/logoutUser.js";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      // showApiUrl();
      // console.log('apiUrl: ', apiUrl);
      // const response = await axios.post("/register", credentials);
      const response = await registerUser(credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    // const response = await axios.post("/login", credentials);
    const response = await loginUser(credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      // endpoint do ewentualnej zmiany, jak będzie BE
      // await axios.post("/logout");
      await logoutUser();
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      // endpoint do ewentualnej zmiany, jak będzie BE
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);