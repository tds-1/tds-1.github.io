/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Tanmay Deep Sharma",
  title: "Hi, I'm Tanmay",
  subTitle: "Senior Software Engineer with 4.5+ years of expertise in Python, AI/ML, and cloud technologies. I specialize in designing scalable solutions that leverage artificial intelligence to solve complex business problems. With extensive experience in the insurtech sector, I've developed AI-powered systems for image processing, natural language processing, and recommendation engines. My technical foundation in distributed systems combined with strong product intuition allows me to build solutions that deliver real business impact. I enjoy contributing to open-source projects and exploring emerging technologies in the AI landscape.",
  resumeLink: "https://drive.google.com/file/d/1FTjacPG-Cxa7ybd2jFCFKPKX8_Bekgql/view"                                                                        
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
  title: "Areas of Expertise",
  subTitle: "SENIOR PYTHON ENGINEER & AI SPECIALIST",
  skills: [
    "AI Engineering: Design and implementation of production-ready AI systems for image recognition, NLP, and recommendation engines",
    "Machine Learning: Deep learning, transformer models, neural networks, and supervised/unsupervised learning pipelines",
    "Cloud Architecture: Designing scalable, cost-efficient systems on AWS with microservices and serverless architecture",
    "Data Engineering: ETL pipelines, real-time data processing, and data warehouse design for analytics",
    "Python Ecosystem: FastAPI, Flask, Django, NumPy, pandas, PyTorch, TensorFlow, and scikit-learn",
    "Software Design: Distributed systems, API design, system performance optimization, and architectural patterns",
    "DevOps & MLOps: CI/CD pipelines, containerization, infrastructure as code, and ML model deployment"
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "AI & ML",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Elasticsearch",
    fontAwesomeClassname: "fas fa-search"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-dharmachakra"
  },
  {
    skillName: "Databases",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "API Design",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "Cloud Architecture",
    fontAwesomeClassname: "fas fa-cloud"
  },
  {
    skillName: "Terraform",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "CI/CD",
    fontAwesomeClassname: "fas fa-code-branch"
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  }
]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & Backend Development",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "AI/ML Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Architecture (AWS)",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & MLOps",
      progressPercentage: "75%"
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
      companylogo: require("./assets/images/Qoala.png").default,
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
      companylogo: require("./assets/images/Qoala.png").default,
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
      companylogo: require("./assets/images/Qoala.png").default,
      date: "November 2020 – March 2021",
      descBullets: [
        "Optimized the insurance policy purchase process through the automated integration of multiple insurers and refined several backend APIs to minimize system load time and downtime.",
        "Executed the implementation of a LINE chatbot, effectively automating and manually addressing end-user queries."
      ]
    },    
    {
      role: "Product Intern",  
      company: "Innovaccer",
      companylogo: require("./assets/images/innovaccer.png").default,
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
      companylogo: require("./assets/images/skillenza.png").default,
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
      companylogo: require("./assets/images/concordium.png").default,
      desc: "Created a versatile JAVA SDK for performing a range of operations on the Concordium blockchain. This includes initializing/updating smart contracts, enabling both encrypted and simple transfers of CCD tokens, and facilitating the conversion of transactions to support V2 of the Concordium node."
    },
  ]
};

const projects = [
  {
    title: "Image Summariser",   
    desc: "The Image Summarizer App is an innovative application that leverages advanced artificial intelligence algorithms to generate concise, meaningful summaries of visual text content.",
    link: "", // Placeholder link
    tags: ["AI", "Image Processing", "Text Summarization", "Computer Vision"],
    problem: "Difficulty in quickly grasping content from text-heavy images.",
    solution: "AI-based summarization of text within images.",
    outcome: "Faster comprehension of visual text content."
  },
  {
    title: "Splitwise Extension",   
    desc: "The Splitwise Extension enhances the original app's functionality by allowing bank statement uploads for efficient bulk splitting and uploading of transactions.",
    link: "", // Placeholder link
    tags: ["Browser Extension", "Automation", "Finance", "Data Processing"],
    problem: "Manual effort required for splitting bank statement transactions in Splitwise.",
    solution: "Browser extension for bulk uploading and splitting via bank statements.",
    outcome: "Streamlined expense splitting from bank statements."
  },
  {
    title: "Data Analyst AI",   
    desc: "Developed Data Analyst Al, an innovative bot programmed to interpret user queries and generate corresponding SQL commands. Although its current accuracy is a development area, the project demonstrates my ability to pioneer Al-driven solutions in data management.",
    link: "", // Placeholder link
    tags: ["AI", "SQL", "Data Management", "Bot", "NLP"],
    problem: "Generating SQL queries from natural language can be complex for users.",
    solution: "AI bot that translates user queries into SQL commands.",
    outcome: "Simplified SQL query generation (development ongoing)."
  },
  {
    title: "Non-instructor led self learning course",   
    desc: "A web app to make self-paced learning efficient and interesting. Problems are asked to the student in an efficient way to maximize learning. It also deals with hierarchy of problems.",
    link: "", // Placeholder link
    tags: ["E-learning", "Web App", "Education", "Adaptive Learning"],
    problem: "Self-paced learning can lack structure and engagement.",
    solution: "Web app using adaptive problem sequencing to maximize learning.",
    outcome: "More efficient and interesting self-paced learning experience."
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
      image: require("./assets/images/codeforces.png").default,
      footerLink: [
        { name: "Link to profile", url: "https://codeforces.com/profile/titan_12" },
      ]
    },
    {
      title: "Highest Rating : 2097",
      subtitle: "Problem Solved : 110",
      image: require("./assets/images/codechef.png").default,
      footerLink: [{ name: "Link to profile", url: "https://www.codechef.com/users/tds115" }]
    },

    {
      title: "Highest Rating : 1565",
      subtitle: "Problem Solved : 376",
      image: require("./assets/images/hackerearth.png").default,
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
      image: require("./assets/images/travel.png").default,
      
    },
    {
      title: "Sports",
      image: require("./assets/images/sports.jpg").default,
    },

    {
      title: "Hiking",
      image: require("./assets/images/hiking.png").default,
    },

    {
      title: "Chess",
      image: require("./assets/images/chess.jpeg").default,
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
