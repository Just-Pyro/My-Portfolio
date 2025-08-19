import aboutme from "../assets/img/aboutme.png";

const About = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="title">
          <div className="title-left">
            <img
              src={aboutme}
              alt="a guy greeting from phone"
              className="aboutme-img"
              width={300}
              height={300}
            />
          </div>
          <div className="title-right">
            <h3 className="montserrat-regular">
              About <br />
              Me
            </h3>
          </div>
        </div>
        <div className="intro">
          <h5>Intro</h5>
          <p>
            Ever since Senior High, I’ve been hooked on programming — at first
            because I wanted to make my own game. When college came, my focus
            shifted to the web, since my last two years were dedicated to it. I
            couldn’t master everything in such a short time, so I decided to
            focus on web development while keeping game development as a future
            goal.
          </p>
          <p>
            As a web programmer, my journey has been nerve-cracking at times,
            exciting, and fun — especially working alongside great teammates.
            Now, I’m looking forward to learning more, growing my skills, and
            building projects that truly make an impact.
          </p>
        </div>
        <div className="skills">
          <h5>Skills</h5>
          <ul>
            <li>
              <strong>Frontend</strong>: HTML, CSS, JavaScript, ReactJS,
              TailwindCSS, Bootstrap
            </li>
            <li>
              <strong>Backend</strong>: CodeIgniter, Laravel, PHP
            </li>
            <li>
              <strong>Tools</strong>: Git, GitHub, VS Code, REST APIs
            </li>
          </ul>
        </div>
        <div className="work-style">
          <h5>Work Style</h5>
          <p>
            I enjoy solving problems by creating reusable components, variables,
            and functions rather than reinventing the wheel. My goal is to make
            code clean, readable, and easy to maintain — while still leaving
            room for creativity in the design and functionality.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
