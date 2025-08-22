const Projects = () => {
  return (
    <>
      <div className="content-wrapper projects">
        <h1 className="montserrat-regular">Projects</h1>

        <div className="project-list">
          <a
            className="project-item"
            href="https://github.com/Just-Pyro/Task-Manager"
            target="_blank"
          >
            <div className="showcase"></div>
            <div className="brief-description">
              <p className="project-title montserrat-regular">Task Manager</p>
              <div className="project-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                tempore repudiandae dolorem minima, doloribus odit? Distinctio
                qui delectus nulla illum doloribus cum necessitatibus at, sint,
                suscipit sed blanditiis, possimus alias.
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
