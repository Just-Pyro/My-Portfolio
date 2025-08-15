import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-navbar">
      <div className="logo">
        <Link to="/">Praise Nacua</Link>
      </div>
      <div className="pages">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
