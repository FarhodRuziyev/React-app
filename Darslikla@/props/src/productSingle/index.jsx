import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductSingle() {
  const { lorem } = useParams();
  const [prod, setProd] = useState({});
  console.log(lorem);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${lorem}`)
      .then((response) => response.json())
      .then((json) => setProd(json));
  });
  return (
    <div>
      <h1>SINGLE PRODUCTS</h1>
      <h1>{prod.id}</h1>
      <h1>{prod.title}</h1>
    </div>
  );
}
