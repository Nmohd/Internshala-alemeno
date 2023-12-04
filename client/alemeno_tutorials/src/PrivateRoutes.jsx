import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  let isAuthenticated = localStorage.getItem("setLoggedIn");
  


  return isAuthenticated ? <Outlet /> : <Navigate to="/Login" />;
}

export default PrivateRoutes;
