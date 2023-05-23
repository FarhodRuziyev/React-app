import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Register from "./pages/register";
import Login from "./pages/login";
import Products from "./pages/products";
import Detailed from "./pages/detailed";
import { createContext, useContext } from "react";
import { UserContext } from "./state";
function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <h1>appjs</h1>
      <h2> {user.name ? ` Username: ${user.name}` : "login"}</h2>
      <Link to={"/about"}>about</Link>
      <Link to={"/login"}>login</Link>
      <Link to={"/register"}>register</Link>
      <Link to={"/"}>home</Link>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about/:categ" element={<Products />} />
        <Route path="/product/:id" element={<Detailed />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
