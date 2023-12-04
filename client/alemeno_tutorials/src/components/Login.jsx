// import { Redirect } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchCourse } from "../redux/courseSlicer";

import "../App.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
 

  const data = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourse());
  }, []);

  const student_details = data.data;

  const handleLogin = () => {
    const student = student_details
      .reduce((acc, curr) => {
        return acc.concat(curr.students);
      }, [])
      .find((student) => student.email === email);

    if (student && student.password === password) {
      setLoggedIn(true);
      localStorage.setItem("setLoggedIn", true);
      localStorage.setItem("userEmail", email);
    } else {
      alert("Invalid email or password");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <center>
      <div className="main-login">
        <h3> Student Login</h3>
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />
          <button className="login-button" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </center>
  );
};

export default Login;
