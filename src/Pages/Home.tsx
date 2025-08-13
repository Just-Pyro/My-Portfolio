import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="border">Home test change</div>
      <div className="headline">
        <p>
          Hi, I’m Praise Nacua — I build creative, functional, and clean web
          solutions.
        </p>
      </div>
      <div className="subheading">
        <p>
          I’m a full-stack web programmer who enjoys blending clean code with
          engaging visuals. From fixing tricky bugs to building complete systems
          from scratch, I bring ideas to life with a mix of creativity and
          precision.
        </p>
      </div>
      <div className="call-to-action">
        <Link to="/projects" className="button">
          See my Work
        </Link>
      </div>
    </>
  );
};

export default Home;
