import { useContext } from "react";
import { ModeContext, UserContext } from "../state";
export default function About() {
  const { mode } = useContext(ModeContext);
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className={mode == "light" ? "dark" : "light"}>
      <h1>about</h1>
    </div>
  );
}
