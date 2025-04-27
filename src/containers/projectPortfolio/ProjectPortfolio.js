import React from "react";
import "./ProjectPortfolio.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function ProjectPortfolio() {
    return (
        <div id="projects">
            <Fade bottom duration={200} distance="20px">
            <div className="project-container">
                <div className="project-header">
                    <h1 className="project-heading">Featured Projects</h1>
                    <p className="project-subheading">
                        Selected work showcasing my expertise in AI, cloud architecture, and software engineering
                    </p>
                </div>
                <div className="project-cards-div">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            cardInfo={{
                                title: project.title,
                                description: project.desc,
                                link: project.link,
                                tags: project.tags
                            }}
                        />
                    );
                })}
                </div>
            </div>
            </Fade>
        </div>
    );
}
