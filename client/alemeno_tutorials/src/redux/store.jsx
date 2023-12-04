import { configureStore } from "@reduxjs/toolkit";

import courseReducer from "./courseSlicer";
import studentCourseSlicer from "./studentCourseSlicer";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    studentCourse:studentCourseSlicer,
  },
});
