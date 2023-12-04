// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails from "./components/CourseDetails";
import Course from "./components/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./components/login.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Course} />
          <Route path="/course/:id" Component={CourseDetails} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
           */}

          <Route path="*" element={"There is nothig here"} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
