/* eslint-disable linebreak-style */
/* eslint-disable import/named */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password },
        config
      );
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        arg,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const editNames = createAsyncThunk(
  "user/modifyNames",
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { firstName, lastName },
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
