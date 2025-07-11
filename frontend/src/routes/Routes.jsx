import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../pages/Home/Home";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element= {<Home/>} />
    </Routes>
  );
}

export default RoutesConfig;
