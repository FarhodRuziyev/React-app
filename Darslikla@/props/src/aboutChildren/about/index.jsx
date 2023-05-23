import { Link, Outlet } from "react-router-dom";
export default function About() {
  return (
    <div>
      <Outlet />
      <h1>about page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        veniam!
      </p>
      <Link to="/about/user">inner page</Link>
    </div>
  );
}
