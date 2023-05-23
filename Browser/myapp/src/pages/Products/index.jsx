import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Prod from "./products.module.scss";

export default function Products() {
  const { name } = useParams();
  const [products, setproducts] = useState([]);
  console.log(name);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((json) =>setproducts(json));
  }, [name]);
      
  return (
    <div className={Prod.product}>
        <div className={Prod.container}>
          {products?.map((p) =>
            <Link to={`/products/${p.id}`} key={p.id}>
                  <div className={Prod.card}>
                      <img src={p?.image} alt="#"/>
                      <h3 className={Prod.title}>{p?.title.slice(0,25)}...</h3>
                      <p className={Prod.pric}>USD {p?.price} $</p>
                      <i>{p?.description.slice(0,22)}...</i>
                      <h3>{p?.category}</h3>
                  </div>
            </Link>
          )}
        </div>
    </div>
  );
}
