import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchAnalytics = createAsyncThunk(
      "jobs/fetchAnalytics",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${SERVER_URL}/analytics/`, {
                        headers: {
                              "Content-Type": "application/json",
                        },
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const fetchJobs = createAsyncThunk(
      "jobs/fetchJobs",
      async (_, { getState, rejectWithValue }) => {
            try {
                  const state = getState();
                  const userRole = state.jobs.userRole;
                  console.log("Current user role:", userRole); // Debug log

                  const endpoint =
                        userRole === "admin" ? "/uni/jobs" : "/student/";

                  const response = await axios.get(`${SERVER_URL}${endpoint}`, {
                        headers: {
                              "Content-Type": "application/json",
                        },
                        withCredentials: true,
                  });
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response.data);
            }
      }
);

const initialState = {
      userRole: null,
      userId: null,
      analytics: [],
      jobs: [],
      analyticsStatus: "idle",
      analyticsError: null,
      jobsStatus: "idle",
      jobsError: null,
};

const jobSlice = createSlice({
      name: "jobs",
      initialState,
      reducers: {
            setUserRole: (state, action) => {
                  state.userRole = action.payload;
                  console.log(state.userRole);
                  state.userAuthenticated = true;
            },
            setUserId: (state, action) => {
                  state.userId = action.payload;
                  console.log(state.userId);
                  state.userAuthenticated = true;
            }
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchAnalytics.pending, (state) => {
                        state.analyticsStatus = "loading";
                  })
                  .addCase(fetchAnalytics.fulfilled, (state, action) => {
                        state.analyticsStatus = "succeeded";
                        state.analyticsError = null;
                        if (Array.isArray(action.payload)) {
                              state.analytics = action.payload;
                        }
                  })
                  .addCase(fetchAnalytics.rejected, (state, action) => {
                        state.analyticsStatus = "failed";
                        state.analyticsError = action.payload;
                  })
                  .addCase(fetchJobs.pending, (state) => {
                        state.jobsStatus = "loading";
                  })
                  .addCase(fetchJobs.fulfilled, (state, action) => {
                        state.jobsStatus = "succeeded";
                        state.jobsError = null;
                        if (Array.isArray(action.payload)) {
                              state.jobs = action.payload;
                        }
                  })
                  .addCase(fetchJobs.rejected, (state, action) => {
                        state.jobsStatus = "failed";
                        state.jobsError = action.payload;
                  });
      },
});

export const {
      setUserRole,
      setUserId
} = jobSlice.actions;

export default jobSlice.reducer;
