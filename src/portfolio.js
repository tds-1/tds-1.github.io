
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Tanmay Deep Sharma",
  title: "Hi all, I'm Tanmay",
  subTitle: "I am an innovative Software Engineer with a strong background in the insurtech sector, proficient in Python, AWS, Elasticsearch, and a variety of Al technologies. I have a proven track record in streamlining workflows, automating complex processes, and developing Al-integrated services. My open-source contributions in blockchain technology highlight my versatility and commitment to the broader tech community. Always eager to learn, I have an effective approach to self-paced learning and continually apply this mindset to my work.",
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
      role: "Senior Software Engineer",  
      company: "Qoala Insurtech",
      companylogo: require("./assets/images/Qoala.png"),
      date: "March 2023 – Present",
      descBullets: [
        "Crafted an innovative conversation analyzer tool as an AWS Lambda function, suggesting actionable insights to boost operational efficiency.",
        "Engineered an AI-integrated service using Flask, which enabled Google Vision-powered image-to-text conversion, the establishment of a structured data extraction pipeline via AWS SQS queues, the analysis of support staff dialogues, and dynamic question-answer formation based on supplied documents.",
        "Collaborated on the construction of a FastAPI-based Elasticsearch wrapper service, leveraging it to transition price list data onto Elasticsearch, thereby facilitating complex recommendation algorithms, search, and sorting capabilities."
      ]
    },    
    {
      role: "Software Engineer",  
      company: "Qoala Insurtech",
      companylogo: require("./assets/images/Qoala.png"),
      date: "April 2021 – February 2023",
      descBullets: [
        "Spearheaded the redesign and development of accounting workflows and visualization tools. This comprehensive redesign incorporated aspects such as multi-level marketing (MLM) account accounting, affiliate commission allocation, refund management, and credit accounting.",
        "Devised a robust campaign management system for the seamless deployment of discount coupons, tailoring incentives to stimulate sales according to campaign guidelines.",
        "Pioneered the introduction of a prepaid credit system and overhauled the existing postpaid credit scheme, augmenting financial flexibility and control.",
        "Streamlined real-time tracking of credit ledgers, bolstering transaction transparency and accuracy.",
      ]
    },    
    {
      role: "Software Engineer Intern",  
      company: "Qoala Insurtech",
      companylogo: require("./assets/images/Qoala.png"),
      date: "November 2020 – March 2021",
      descBullets: [
        "Optimized the insurance policy purchase process through the automated integration of multiple insurers and refined several backend APIs to minimize system load time and downtime.",
        "Executed the implementation of a LINE chatbot, effectively automating and manually addressing end-user queries."
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
  title: "Open Source Contribution",
  viewExperiences: true, //Set it to true to show workExperiences Section
  subtitle: "",
  projects: [
    {
      role: "Tech Intern",   
      company: "Concordium",
      companylogo: require("./assets/images/concordium.png"),
      desc: "Created a versatile JAVA SDK for performing a range of operations on the Concordium blockchain. This includes initializing/updating smart contracts, enabling both encrypted and simple transfers of CCD tokens, and facilitating the conversion of transactions to support V2 of the Concordium node."
    },
  ]
};

const projects = [
  {
    title: "Image Summariser",   
    desc: "The Image Summarizer App is an innovative application that leverages advanced artificial intelligence algorithms to generate concise, meaningful summaries of visual text content.",
  },
  {
    title: "Splitwise Extension",   
    desc: "The Splitwise Extension enhances the original app's functionality by allowing bank statement uploads for efficient bulk splitting and uploading of transactions.",
  },
  {
    title: "Data Analyst AI",   
    desc: "Developed Data Analyst Al, an innovative bot programmed to interpret user queries and generate corresponding SQL commands. Although its current accuracy is a development area, the project demonstrates my ability to pioneer Al-driven solutions in data management.",
  },
  {
    title: "Non-instructor led self learning course",   
    desc: "A web app to make self-paced learning efficient and interesting. Problems are asked to the student in an efficient way to maximize learning. It also deals with hierarchy of problems.",
  },
]

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: "Achievements 🏆 ",
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

  title: "Hobbies ",
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
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9799968212",
  email_address: "tanmaydeepsharma21@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, contactInfo, hobbiesSection, projects};
