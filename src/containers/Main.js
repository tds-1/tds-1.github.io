import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Blogs from "./blogs/Blogs";
import Achievement from "./achievement/Achievement";
import Hobbies from "./hobbies/hobbies";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Hobbies />
        <Profile />
        <Top />
      </div>
    );
  }
}
