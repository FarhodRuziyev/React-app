import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import prom from './product.module.scss';

export default function Product() {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setCard(json));
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={prom.product}>
        <div className={prom.cardd}>
            <div className={prom.img}><img src={card.image} /></div>
            <div className={prom.text}>
              <div className={prom.titl}>{card.title}</div>
              <div>{card.description}</div> 
              <p className={prom.categ}>{card.category}</p>
              <p className={prom.p}>USD {card.price} $</p>
            </div>
        </div>
    </div>
  );
}
