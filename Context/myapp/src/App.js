import {Route, Routes, Link} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/products";
import Detail from "./pages/detail";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1><i>LoGo</i></h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about/:categ" element={<Products/>} />
        <Route path="/product/:id" element={<Detail/>} />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
