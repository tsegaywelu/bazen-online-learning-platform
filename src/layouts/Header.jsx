import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" flex  justify-evenly  bg-slate-100  shadow-md shadow-black p-5">
        <div>Home</div>
        <div>About us </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Link to={"/login"}>login</Link>
        </div>
        <div>Contact us </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
