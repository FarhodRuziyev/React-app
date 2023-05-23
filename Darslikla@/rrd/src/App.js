import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Users from "./users";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Layout from "./components/layout";
import Products from "./products";

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <Routes>
            <Route path="/" element={<h1>home page</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<Users />}>
              <Route path=":name" element={<Products />} />
            </Route>
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
