import { createSlice } from "@reduxjs/toolkit";
import { students } from "../../constants";

const initialState = {
  students: students,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.item_id !== action.payload
      );
    },
  },
});

export const { removeStudent } = studentSlice.actions;
export default studentSlice.reducer;