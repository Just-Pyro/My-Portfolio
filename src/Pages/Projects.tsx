import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
                A full-stack CRUD application that allows users to create, view,
                update, and delete tasks. Built with SQLite for persistent data
                storage, it demonstrates core skills in backend development,
                database integration, and building a clean, user-friendly
                interface.
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
