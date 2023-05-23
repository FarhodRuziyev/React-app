import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function Products() {
  const { categ } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categ}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [categ]);

  return (
    <div>
      <h1>Products page</h1>
      {products?.map((p) => (
        <h2>
          <Link to={`/product/${p.id}`}>{p?.title}</Link>
        </h2>
      ))}
    </div>
  );
}
