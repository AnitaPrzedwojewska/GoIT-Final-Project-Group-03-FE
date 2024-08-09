// npm packages
import { createAsyncThunk } from "@reduxjs/toolkit";

// functions
import getUser from "../../api/users/getUser.js";
import updateUser from "../../api/users/updateUser.js";

export const get = createAsyncThunk(
  "user/get",
  async (credentials, thunkAPI) => {
  try {
    const response = await getUser(credentials);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const update = createAsyncThunk(
  "user/update",
  async (credentials, thunkAPI) => {
    try {
      const response = await updateUser(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);