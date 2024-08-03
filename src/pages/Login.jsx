import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const password = location.state?.password || " gust";
  const username = location.state?.username || "guest";
  const [userpassword, setuserpassword] = useState();
  const [userusername, setuserusername] = useState();
  const nn = localStorage.getItem("username");
  const pp = localStorage.getItem("password");
  if (!nn || !pp) {
    navigate("/register");
  }
  function comparelocal(e) {
    e.preventDefault();
    if (nn == userusername && pp == userpassword) {
      navigate("/home");
    } else {
      alert("incorrect password and username");
    }
  }

  return (
    <div className="flex justify-center">
      <h1>
        your name is {username} {password}
      </h1>
      <form
        action=""
        className="flex justify-center bg-slate-50 mt-6 w-1/2 flex-col"
      >
        <h1 className=" text-red-600 font-semibold text-4xl w-1/2 mx-auto  ">
          Login here !
        </h1>
        <div className="flex   flex-col">
          <label htmlFor="username"> username:</label>
          <input
            type="text"
            placeholder="name"
            className="p-2 m-6 "
            onChange={(e) => setuserusername(e.target.value)}
          />
          <label htmlFor="password"> password:</label>
          <input
            type="text"
            placeholder="password"
            className="p-2 m-6"
            onChange={(e) => setuserpassword(e.target.value)}
          />
          <button
            className="p-2  bg-blue-500 full-rounded w-1/3 mx-auto"
            onClick={(e) => comparelocal(e)}
          >
            submit
          </button>
          {userusername} {userpassword}
        </div>
      </form>
    </div>
  );
};

export default Login;
