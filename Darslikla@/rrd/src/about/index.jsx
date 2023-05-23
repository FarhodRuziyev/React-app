import "./style.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function About() {
  const nav = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    if (loc?.pathname == "/about") {
      nav("/");
    }
  }, [loc.pathname]);

  console.log(loc);
  return (
    <div>
      <h1>thats about page</h1>
      <Link to={"/"}>home</Link>
      <button onClick={() => nav("/users")}>home</button>
    </div>
  );
}
