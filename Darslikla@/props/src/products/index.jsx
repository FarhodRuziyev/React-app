import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Products() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => setProd(json));
  });
  return (
    <div>
      <h1>PRODUCTS</h1>
      {prod?.map((product) => (
        <div>
          <Link to={`${product.id}`}>
            <h1>{product.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
