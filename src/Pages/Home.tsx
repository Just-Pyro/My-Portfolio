import { Link } from "react-router-dom";
import profile from "../assets/img/portfolio-pic.png";
import cat from "../assets/gif/cat-programmer.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="headline">
          <div className="head-left montserrat-regular">
            <h1>Hi, I’m Praise Nacua</h1>
            <p> — I build creative, functional, and clean web solutions.</p>
          </div>
          <div className="head-right">
            <div className="img-wrapper">
              <img src={profile} alt="profile pic" className="profile-img" />
            </div>
          </div>
        </div>
        <div className="subheading">
          <div className="sub-left">
            <img src={cat} alt="Cat Coding" className="cat-gif" />
          </div>
          <div className="sub-right montserrat-regular">
            <p>
              I’m a full-stack web programmer who enjoys blending clean code
              with engaging visuals. From fixing tricky bugs to building
              complete systems from scratch, I bring ideas to life with a mix of
              creativity and precision.
            </p>
          </div>
        </div>
        <div className="call-to-action">
          <Link to="/projects" className="button cta-button">
            See my Work <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
