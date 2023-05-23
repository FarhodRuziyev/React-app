import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Detailed() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <div>
      <h1>Detailed page</h1>
      <h2>{product?.title}</h2>
    </div>
  );
}
