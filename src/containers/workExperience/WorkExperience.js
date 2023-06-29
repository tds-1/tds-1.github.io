import React from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function WorkExperience() {
    if(workExperiences.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <h1 className="experience-heading">Experiences</h1>
                    <div className={`experience-cards-div ${workExperiences.experience.length > 3 ? 'large-content' : 'small-content'}`}>
                    {workExperiences.experience.map((card, index) => {
                        return (
                            <ExperienceCard
                                key={index}
                                cardInfo={{
                                    company: card.company,
                                    desc: card.desc,
                                    date: card.date,
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
