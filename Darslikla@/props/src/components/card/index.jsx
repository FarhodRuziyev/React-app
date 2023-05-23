import "./style.scss";
import { useState } from "react";
const Card = () => {
  const [num, setNum] = useState(0);

  return (
    <div className={`card`}>
      <h1>card</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <p>{num}</p>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default Card;
