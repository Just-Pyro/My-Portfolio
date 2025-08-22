import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <nav className="main-navbar montserrat-regular">
      <div className="logo">
        <HashLink smooth to="/#start-nav-reference">
          PRAISE NACUA
        </HashLink>
      </div>
      <div className="pages">
        <HashLink smooth to="/#start-nav-reference">
          Home
        </HashLink>
        <HashLink smooth to="/about#start-nav-reference">
          About
        </HashLink>
        <a href="#contact-me">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
