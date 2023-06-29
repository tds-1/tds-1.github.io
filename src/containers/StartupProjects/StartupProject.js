import React from "react";
import "./StartupProjects.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProjects() {
    if(bigProjects.viewExperiences){
        return (
            <div id="startup-projects">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <h1 className="experience-heading">{bigProjects.title}</h1>
                    <div className={`experience-cards-div large-content`}>
                    {bigProjects.projects.map((card, index) => {
                        return (
                            <ExperienceCard
                                key={index}
                                cardInfo={{
                                    company: card.company,
                                    desc: card.desc,
                                    companylogo: card.companylogo,
                                    role: card.role,
                                    descBullets: card.descBullets
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
    return null;
}
