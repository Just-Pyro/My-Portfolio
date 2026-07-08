import { useEffect, useState } from "react";
import shopplanr from "../assets/img/project-thumbnail/ShopPlanr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

interface ProjectType {
    link: string;
    thumbnail: string | null;
    title: string;
    description: string;
    status: string;
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
                status: "completed",
            },
            {
                link: "https://github.com/Just-Pyro/Tempo",
                thumbnail: null,
                title: "Tempo",
                description: `An on-going personal productivity web app that helps users manage 
                    daily tasks by tracking estimated vs. actual completion times. 
                    Built around a clean CRUD architecture using Laravel and Blade.`,
                status: "in-progress",
            },
        ];

        setProjects(list);
    }, []);

    const capitalizeFirstLetterStatus = (str: string) => {
        return str
            .split("-")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <>
            <div className="content-wrapper projects">
                <h1 className="montserrat-regular">Projects</h1>

                <div className="project-list">
                    {projects.length > 0 ? (
                        projects.map((project) => {
                            const status = capitalizeFirstLetterStatus(
                                project.status,
                            );

                            return (
                                <a
                                    className="project-item"
                                    href={project.link}
                                    target="_blank"
                                >
                                    <div className="showcase">
                                        {project.thumbnail ? (
                                            <img
                                                src={project.thumbnail}
                                                className="max-w-full max-h-full object-fit-cover"
                                            />
                                        ) : (
                                            <div className="text-7xl text-gray-100">
                                                <FontAwesomeIcon
                                                    icon={faCircleQuestion}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="brief-description">
                                        <p className="project-title montserrat-regular">
                                            {project.title}
                                        </p>
                                        <div className="project-text">
                                            {project.description}
                                        </div>
                                        <div
                                            className={`project-status ${project.status}`}
                                        >
                                            {status}
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
