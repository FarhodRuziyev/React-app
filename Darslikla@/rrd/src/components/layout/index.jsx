import Footer from "../footer";
import Nav from "../navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
