import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../state";

export default function Register() {
  const { user, setUser } = useContext(UserContext);
  const [date, setDate] = useState({
    name: "",
    age: "",
  });

  const sub = (e) => {
    e.preventDefault();
    setUser(date);
    setDate({ name: "", age: "" });
  };
  console.log(user, "context");

  return (
    <div>
      <h1>Register page</h1>
      <form>
        <input
          type="text"
          onChange={(e) =>
            setDate((prev) => ({ ...prev, name: e.target.value }))
          }
          value={date.name}
        />
        <input
          type="text"
          onChange={(e) =>
            setDate((prev) => ({ ...prev, age: e.target.value }))
          }
          value={date.age}
        />
        <button onClick={sub}>register</button>
      </form>
    </div>
  );
}
