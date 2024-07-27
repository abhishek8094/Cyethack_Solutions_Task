import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: document.cookie.includes("isLoggedIn=true"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      document.cookie = "isLoggedIn=true"; // Set the cookie
    },
    logout(state) {
      state.isLoggedIn = false;
      document.cookie =
        "isLoggedIn = ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // Clear the cookie
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;