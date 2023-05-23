import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Leyout from "./components/Leyout";

import appscss from "./App.module.scss";

function App() {
  return (
    <div className={appscss.global}>
      <Leyout>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path=":name" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
      </Leyout>
    </div>
  );
}

export default App;
