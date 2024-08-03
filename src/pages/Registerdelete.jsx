import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Utilites/API";
import "../Utilites/delete.css";
const Registerdelete = () => {
  const slide = useNavigate();
  const [username, setusername] = useState();
  function loginuser(e) {
    e.preventDefault();
    const local = localStorage.getItem("newusername");
    if (username == local) {
      slide("/home");
    }
  }

  return (
    <div className="flex justify-center mt-8">
      <form
        id="myform"
        action=""
        className=" font-bold flex justify-center flex-col w-1/2 bg-slate-200"
      >
        <h1 className="mx-auto text-red-700 text-4xl">register here!</h1>
        <div className="flex justify-center flex-col  w-1/2 mx-auto bg-slate-300">
          <label htmlFor="useername"> username:</label>
          <input
            type="text"
            placeholder="username"
            className="m-6 p-2 rounded-lg"
            autoComplete="OFF"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            className="m-6 p-2 rounded-lg"
            autoComplete="OFF"
            id="passsword"
          />

          <label htmlFor="Email">Email:</label>
          <input type="mail" className="m-6 p-2 rounded-lg" id="email" />
        </div>
        <button
          className="bg-blue-500 p-3 rounded-lg  hover:opacity-0.5 m-3 w-1/4  mx-auto"
          onClick={(e) => loginuser(e)}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Registerdelete;
