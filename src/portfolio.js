
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Tanmay Deep Sharma",
  title: "Hi all, I'm Tanmay",
  subTitle: emoji("I am a Software Developer 🚀 having an experience of building Web applications with Python / ReactJS / JavaScript / HTML / CSS and some other technologies."),
  resumeLink: "https://drive.google.com/file/d/189npi4sTN7b8wB_qfYWk9L0Jjp9CBo46/view?usp=sharing"                                                                        
};

// Your Social Media Link

const socialMediaLinks = {  
  facebook : "https://facebook.com/tanmay.d.sharma",
  github: "https://github.com/tds-1/",
  linkedin: "https://in.linkedin.com/in/tanmay-deep-sharma-696124148",
  gmail: "tanmaydeepsharma21@gmail.com",
  instagram: "https://www.instagram.com/te.di.ous/",
  twitter : "https://twitter.com/TanmayDeep",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "Programming Languages : C, C++ (STL), Python",
    "Database : My-SQL, MongoDB, Elasticsearch",
    "Concepts : RESTful API Design/Integration, MVC Architecture",
    "Frameworks : Flask, Django, React, PostgreSQL",
    "Others : Git, Docker, SQLAlchemy,Data Structures, Algorithmic Optimization",
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "flask",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
   {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Github",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "ubuntu",
    fontAwesomeClassname: "fab fa-ubuntu"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",  
      company: "Fairdee Insurtech",
      companylogo: require("./assets/images/fairdee.jpeg"),
      date: "December 2020 – Present",
      descBullets: [
        "Day to day responsibilities include developing new features for website."
      ]
    },    
    {
      role: "Product Intern",  
      company: "Innovaccer",
      companylogo: require("./assets/images/innovaccer.png"),
      date: "May 2020 – July 2020",
      descBullets: [
        "Automated log extraction from different sources to single destination",
        "Automated creation of AWS services using terraform",
        "Reduced the manual efforts to create a flow in MS Flow"
      ]
    },
    {
      role: "Tech Intern",   
      company: "Skillenza",
      companylogo: require("./assets/images/skillenza.png"),
      date: "May 2019 – July 2019",
      descBullets: [
        "Intern under the Lead Software Developer.",
        "Set/Tested data structures and algorithm-based problems for recruitment drives.",
        "Worked on database problems curation."
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "tds-1", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/yaask.png"),
      link: "http://yaask.herokuapp.com/"
    },
    {
      image: require("./assets/images/zwitor.ico"),
      link: "http://zwitorr.herokuapp.com/"
    }
  ]
};


// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🏆 "),
  subtitle: "Achievements that I have made !",

  achivementsCards: [
    {
      title: "Highest Rating : 1872",
      subtitle: "Current Rating : 1836",
      image: require("./assets/images/codeforces.png"),
      footerLink: [
        { name: "Link to profile", url: "https://codeforces.com/profile/titan_12" },
      ]
    },
    {
      title: "Highest Rating : 2097",
      subtitle: "Problem Solved : 110",
      image: require("./assets/images/codechef.png"),
      footerLink: [{ name: "Link to profile", url: "https://www.codechef.com/users/tds115" }]
    },

    {
      title: "Highest Rating : 1565",
      subtitle: "Problem Solved : 376",
      image: require("./assets/images/hackerearth.png"),
      footerLink: [
        { name: "Link to profile", url: "https://www.hackerearth.com/@tds11" }
      ]
    }
  ]
};


const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@tanmaydeepsharma21/ecs-fargate-type-service-deployment-using-terraform-d35c92666246?sk=0c5a7d4eebff799db298b5df97943361",
      title: "ECS FARGATE type service deployment using terraform.",
      description: "This post will be covering the basic use of Terraform file to configure a container cluster on cloud and run several services on the cluster."
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const hobbiesSection = {

  title: emoji("Hobbies "),
  subtitle: "Things I do for pass time !",

  hobbiesCards: [
    {
      title: "Travelling",
      image: require("./assets/images/travel.png"),
      
    },
    {
      title: "Sports",
      image: require("./assets/images/sports.jpg"),
    },

    {
      title: "Hiking",
      image: require("./assets/images/hiking.png"),
    },

    {
      title: "Chess",
      image: require("./assets/images/chess.jpeg"),
    }
  ]
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9799968212",
  email_address: "tanmaydeepsharma21@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, contactInfo, hobbiesSection};
