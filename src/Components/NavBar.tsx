import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
