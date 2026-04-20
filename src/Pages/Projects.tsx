import { useEffect, useState } from "react";
import shopplanr from "../assets/img/project-thumbnail/ShopPlanr.png";

interface ProjectType {
    link: string;
    thumbnail: string;
    title: string;
    description: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        const list = [
            {
                link: "https://github.com/Just-Pyro/Shopplanr",
                thumbnail: shopplanr,
                title: "ShopPlanr",
                description: `A full-stack shopping planner that lets users schedule
                    store visits, set budgets, and plan their item list ahead of time.
                    On the day of the trip, it switches into shopping mode — tracking
                    actual quantities and prices while automatically calculating
                    remaining budget in real time. Built across three platforms
                    (Expo, React, and Laravel Blade) with a shared REST API and
                    offline SQLite support on mobile.`,
            },
            {
                link: "https://github.com/Just-Pyro/Task-Manager",
                thumbnail: "",
                title: "Task Manager",
                description: `A full-stack CRUD application that allows users
                    to create, view, update, and delete tasks. Built
                    with SQLite for persistent data storage, it
                    demonstrates core skills in backend development,
                    database integration, and building a clean,
                    user-friendly interface.`,
            },
        ];

        setProjects(list);
    }, []);

    return (
        <>
            <div className="content-wrapper projects">
                <h1 className="montserrat-regular">Projects</h1>

                <div className="project-list">
                    {projects.length > 0 ? (
                        projects.map((project) => {
                            return (
                                <a
                                    className="project-item"
                                    href={project.link}
                                    target="_blank"
                                >
                                    <div className="showcase">
                                        <img
                                            src={project.thumbnail}
                                            className="max-w-full max-h-full object-fit-cover"
                                        />
                                    </div>
                                    <div className="brief-description">
                                        <p className="project-title montserrat-regular">
                                            {project.title}
                                        </p>
                                        <div className="project-text">
                                            {project.description}
                                        </div>
                                    </div>
                                </a>
                            );
                        })
                    ) : (
                        <p>No Projects Yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Projects;
