import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../store/Slices/authSlice"; 
import authReducer from "../store/Slices/studentSlice"; 

const store = configureStore({
  reducer: {
    student: studentReducer,
    auth: authReducer,
    // Add other reducers here if needed
  },
});

export default store;