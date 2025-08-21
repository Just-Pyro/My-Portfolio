import aboutme from "../assets/img/aboutme.png";
import intro1 from "../assets/img/intro1.png";
import intro2 from "../assets/img/intro2.png";
import workStyle from "../assets/img/work-style.png";

const About = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="title">
          <div className="title-left">
            <div className="image-wrapper">
              <div className="stack-1"></div>
              <div className="stack-2"></div>
              <img
                src={aboutme}
                alt="a guy greeting from phone"
                className="aboutme-img"
              />
            </div>
          </div>
          <div className="title-right">
            <h3 className="montserrat-regular">
              About <br />
              Me
            </h3>
          </div>
        </div>
        <div className="intro">
          <div className="paragraph-1">
            <p>
              Ever since Senior High, I’ve been hooked on programming — at first
              because I wanted to make my own game. When college came, my focus
              shifted to the web, since my last two years were dedicated to it.
              I couldn’t master everything in such a short time, so I decided to
              focus on web development while keeping game development as a
              future goal.
            </p>
            <img src={intro1} alt="" />
          </div>
          <div className="paragraph-2">
            <img src={intro2} alt="" />
            <p>
              As a web programmer, my journey has been nerve-cracking at times,
              exciting, and fun — especially working alongside great teammates.
              Now, I’m looking forward to learning more, growing my skills, and
              building projects that truly make an impact.
            </p>
          </div>
        </div>
        <div className="work-style montserrat-regular">
          <h5>MY WORK STYLE</h5>
          <div>
            <img
              src={workStyle}
              alt="work style illustration"
              className="work-style-img"
            />
            <p>
              I enjoy solving problems by creating reusable components,
              variables, and functions rather than reinventing the wheel. My
              goal is to make code clean, readable, and easy to maintain — while
              still leaving room for creativity in the design and functionality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
