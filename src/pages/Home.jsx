import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem("password") || !localStorage.getItem("username")) {
    alert("you have to login first");
    navigate("/login");
  }
  return (
    <div>
      Home
      <h1>this is the home page </h1>
      <h2></h2>
    </div>
  );
};

export default Home;
