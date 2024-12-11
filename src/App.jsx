import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Captainsignup from "./pages/Captainsignup";
import CAptainlogin from "./pages/Captainlogin";
import Usesignup from "./pages/Usersignup";
import Userlogin from "./pages/Userlogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/captainSignup" element={<Captainsignup />} />
        <Route path="/captainLogin" element={<CAptainlogin />} />
        <Route path="/userSignup" element={<Usesignup />} />
        <Route path="/userLogin" element={<Userlogin />} />
      </Routes>
    </div>
  );
};

export default App;
