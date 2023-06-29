import React from "react";
import "./ProjectPortfolio.css";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function ProjectPortfolio() {
    return (
        <div id="projects">
            <Fade bottom duration={1000} distance="20px">
            <div className="project-container">
                <h1 className="project-heading">Projects</h1>
                <div className="project-cards-div">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            cardInfo={{
                                title: project.title,
                                description: project.desc,
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
