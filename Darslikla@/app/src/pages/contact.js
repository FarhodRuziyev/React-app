import { useState } from "react";

export default function Contact() {
  const [num, setNum] = useState(["hi"]);
  const increase = (a) => {
    // setNum((value) => value + 1);
    // setNum((value) => value + 1);
    // setNum((user) => ({ ...user, age: 20 }));
    setNum((arr) => [...arr, a]);
  };
  console.log(num);
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => increase("hello")}>+</button>
      <button>-</button>
    </div>
  );
}
