import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import registerUser from "../../api/users/registerUser.js";
import loginUser from "../../api/users/loginUser.js";
import logoutUser from "../../api/users/logoutUser.js";
// import { get } from "../user/user.operations.js";

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
      const response = await registerUser(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await loginUser(credentials);
      console.log("login response: ", response);
      console.log("login response token: ", response.token);
      setAuthHeader(response.token);
      // thunkAPI.dispatch(get());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await logoutUser();
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
