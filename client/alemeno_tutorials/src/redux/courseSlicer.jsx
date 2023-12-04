import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourse = createAsyncThunk("fetchCourse", async () => {
  const data = await fetch(`http://localhost:3000/courseModel `);
  return data.json();
});

const course = createSlice({
  name: "course",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCourse.rejected, (state) => {
      state.error = true;
    });
  },
});

export default course.reducer;
