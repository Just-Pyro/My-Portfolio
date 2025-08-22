import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactMe from "../assets/img/contact-me.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div id="contact-me">
          <div className="subfooter-left">
            <img src={contactMe} alt="Man Waving his Hand" />
          </div>
          <div className="subfooter-right">
            <div className="title-label">Let's Connect</div>
            <div className="text">
              <p>
                Have a project in mind, need a developer, or just want to say
                hi? I'm always open to opportunities and conversations.
              </p>
            </div>
            <div className="contact-info">
              <a href="mailto:nacuapraiseemmanuel@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/Just-Pyro" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/praise-emmanuel-nacua-b30b84277/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="rights-reserved">
          <p>© 2025 Praise Nacua. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
