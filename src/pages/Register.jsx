import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  function loginuser(e) {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/login", { state: username, password, email });
  }
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex justify-center bg-slate-50 mt-6 w-1/2 flex-col"
      >
        <h1 className=" text-red-600 font-semibold text-4xl w-1/2 mx-auto  ">
          register here !
        </h1>
        <div className="flex   flex-col">
          <label htmlFor="username"> username:</label>
          <input
            type="text"
            placeholder="name"
            className="p-2 m-6 rounded-lg"
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <label htmlFor="password"> password:</label>

          <input
            type="password"
            placeholder="password"
            className="p-2 m-6 rounded-lg"
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="p-2  m-6 rounded-lg"
            placeholder="email"
            required
          />
          <button
            className="p-2  bg-blue-500 full-rounded w-1/3 mx-auto"
            onClick={(e) => loginuser(e)}
          >
            submit
          </button>
          {username}
        </div>
      </form>
    </div>
  );
};
export default Register;
