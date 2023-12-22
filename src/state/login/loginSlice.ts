import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginState {
  loading: boolean;
  isLoggedIn: boolean;
  role: string | null;
  userId: string | null;
  token: string | null;
  error: string | null;
}

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials: { email: string; password: string }) => {
    const request = await axios.post(
      `http://localhost:5000/auth/login`,
      userCredentials
    );
    const response = await request.data.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const initialState: LoginState = {
  loading: false,
  isLoggedIn: false,
  role: "none",
  userId: "",
  token: "",
  error: null,
};

const loginSlice = createSlice({
  name: "userLoggedInState",
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<LoginState>) => {
      state.isLoggedIn = true;
      state.role = action.payload.role;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.isLoggedIn = false;
        state.role = null;
        state.userId = null;
        state.token = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.role = action.payload.role;
        state.token = action.payload.token;
        state.userId = action.payload.id;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.role = null;
        state.token = null;
        state.userId = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = `Access denied. Invalid Credentials.`;
        } else {
          state.error = `Unexpected error`;
        }
      });
  },
});

export const { loggedIn } = loginSlice.actions;

export default loginSlice.reducer;
