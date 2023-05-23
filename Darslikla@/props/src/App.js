import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./aboutChildren/about";
import Contact from "./contacts";
import Navbar from "./components/navbar";
import AboutChildren from "./aboutChildren";
import Products from "./products";
import ProductSingle from "./productSingle";

function App() {
  return (
    <div className="body">
      <h1>welcome to appjs</h1>
      {/* <About>
        <div>
          <h1>im children</h1>
          <h1>Lorem, ipsum.</h1>
          <h3>Lorem ipsum dolor sit.</h3>
        </div>
      </About> */}
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}>
          <Route path="user" element={<AboutChildren />} />
        </Route>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:lorem" element={<ProductSingle />} />
      </Routes>
    </div>
  );
}

export default App;
