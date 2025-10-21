import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuActive]);

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

      <div
        className={`offscreen-menu-btn ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`offscreen-menu ${menuActive ? "active" : ""}`}>
        <HashLink
          smooth
          to="/#start-nav-reference"
          onClick={() => setMenuActive(false)}
        >
          Home
        </HashLink>
        <HashLink
          smooth
          to="/about#start-nav-reference"
          onClick={() => setMenuActive(false)}
        >
          About
        </HashLink>
      </div>
    </nav>
  );
};

export default NavBar;
