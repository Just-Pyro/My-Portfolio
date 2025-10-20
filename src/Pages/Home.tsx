import { HashLink } from "react-router-hash-link";
import profile from "../assets/img/portfolio-pic.png";
import cat from "../assets/gif/cat-programmer.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import TailwindIcon from "../assets/svg/TailwindIcon";
import Codeigniter from "../assets/svg/Codeigniter";
import VSCode from "../assets/svg/VSCode";
import Git from "../assets/svg/Git";
import RESTApi from "../assets/svg/RESTApi";

const Home = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="headline" id="headline">
          <div className="head-left montserrat-regular">
            <h1>Hi there, I’m Praise Nacua</h1>
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
          <HashLink
            smooth
            to="/projects#start-top-ref"
            className="button cta-button"
          >
            See my Work <FontAwesomeIcon icon={faArrowRight} />
          </HashLink>
        </div>

        <div className="skills montserrat-regular">
          <h5>SKILLS</h5>
          <ul>
            <li>
              <strong>Frontend:</strong>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faHtml5} /> <span>HTML5</span>
              </div>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faCss3} /> <span>CSS3</span>
              </div>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faJs} /> <span>JavaScript</span>
              </div>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faReact} /> <span>ReactJS</span>
              </div>
              <div className="specific-skill">
                <TailwindIcon /> <span>TailwindCSS</span>
              </div>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faBootstrap} /> <span>Bootstrap</span>
              </div>
            </li>
            <li>
              <strong>Backend:</strong>
              <div className="specific-skill">
                <Codeigniter />
                <span>CodeIgniter</span>
              </div>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faLaravel} />
                <span>Laravel</span>
              </div>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faPhp} />
                <span>PHP</span>
              </div>
            </li>
            <li>
              <strong>Tools:</strong>
              <div className="specific-skill">
                <Git />
                <span>Git</span>
              </div>
              <div className="specific-skill">
                <FontAwesomeIcon icon={faGithub} />
                <span>Github</span>
              </div>
              <div className="specific-skill">
                <VSCode />
                <span>VS Code</span>
              </div>
              <div className="specific-skill">
                <RESTApi />
                <span>REST APIs</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
