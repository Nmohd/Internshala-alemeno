import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentCourse = createAsyncThunk(
  "fetchStudentCourse",
  async (userEmail) => {
    const data = await fetch(
      `http://localhost:3000/courseModel?q=${userEmail} `
    );

    return data.json();
  }
);

const studentCourse = createSlice({
  name: "studentCourse",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudentCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudentCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchStudentCourse.rejected, (state) => {
      state.error = true;
    });
  },
});

export default studentCourse.reducer;
