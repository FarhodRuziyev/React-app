import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

export default function Users() {
  const [categ, setCateg] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCateg(json));
  }, []);
  console.log(categ);
  return (
    <div>
      <h1>thats Users page</h1>
      {categ?.map((category) => (
        <h1>
          <Link to={`${category}`}>{category}</Link>
        </h1>
      ))}
      <Outlet />
    </div>
  );
}
