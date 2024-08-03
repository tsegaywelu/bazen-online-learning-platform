import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Registerdelete from "./pages/Registerdelete";
const APP = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/tegay" element={<Registerdelete />} />
      </Routes>
    </BrowserRouter>
  );
};
export default APP;
