import { Link } from "react-router-dom";
import React, { useState } from "react";

function Userlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandeler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img className="w-20 ml-4 mb-10" src="src\assets\logo.png" alt="Logo" />
        <form
          onSubmit={(e) => {
            submitHandeler(e);
          }}
        >
          <h3 className="text-2xl pt-2 font-medium mb-2 font-serif">
            What's your email
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            placeholder="email@example.com"
          />
          <h3 className="text-2xl pt-2 font-medium mb-2 font-serif">
            What's your password
          </h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Something strong"
          />
          <button
            to={"/userLogin"}
            className="bg-[#66ff66] inline-block text-center text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center pt-4">
          New here?{" "}
          <Link to={"/userSignup"} className="text-cyan-500">
            Create a new Account
          </Link>
        </p>
      </div>
      <Link
        to={"/captainLogin"}
        className="bg-[#adcd0e] flex items-center justify-center text-white mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        type="submit"
      >
        Sign in as Driver
      </Link>
    </div>
  );
}

export default Userlogin;
