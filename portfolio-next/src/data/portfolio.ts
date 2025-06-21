export const personalInfo = {
  name: "Tanmay Deep Sharma",
  title: "Senior Software Engineer",
  tagline: "Building Intelligent Systems that Scale",
  description: "Senior Software Engineer with 4.5+ years of expertise in Python, AI/ML, and cloud technologies. I specialize in designing scalable solutions that leverage artificial intelligence to solve complex business problems.",
  email: "tanmaydeepsharma21@gmail.com",
  phone: "+91-9799968212",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1FTjacPG-Cxa7ybd2jFCFKPKX8_Bekgql/view"
}

export const socialLinks = {
  github: "https://github.com/tds-1/",
  linkedin: "https://in.linkedin.com/in/tanmay-deep-sharma-696124148",
  twitter: "https://twitter.com/TanmayDeep",
  email: "mailto:tanmaydeepsharma21@gmail.com"
}

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 95, years: 4.5 },
      { name: "Java", level: 80, years: 3 },
      { name: "JavaScript", level: 75, years: 2 },
      { name: "TypeScript", level: 70, years: 1.5 }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "Machine Learning", level: 90, years: 3 },
      { name: "Deep Learning", level: 85, years: 2.5 },
      { name: "NLP", level: 88, years: 3 },
      { name: "Computer Vision", level: 80, years: 2 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", level: 95, years: 3 },
      { name: "Flask", level: 90, years: 4 },
      { name: "Django", level: 75, years: 2 },
      { name: "REST APIs", level: 95, years: 4.5 }
    ]
  },
  {
    category: "Cloud/DevOps",
    items: [
      { name: "AWS", level: 85, years: 3 },
      { name: "Docker", level: 80, years: 2.5 },
      { name: "Terraform", level: 75, years: 2 },
      { name: "Kubernetes", level: 70, years: 1.5 }
    ]
  },
  {
    category: "Data",
    items: [
      { name: "PostgreSQL", level: 85, years: 3.5 },
      { name: "Elasticsearch", level: 88, years: 3 },
      { name: "Redis", level: 80, years: 2.5 },
      { name: "MongoDB", level: 75, years: 2 }
    ]
  }
]

export const experience = [
  {
    id: "chatwoot-senior",
    role: "Senior Software Engineer",
    company: "Chatwoot",
    period: "May 2025 – Present",
    achievements: [
      "Architecting scalable microservices for real-time messaging and AI-powered chatbot integrations",
      "Implementing advanced analytics and reporting systems for customer engagement insights"
    ],
    skills: ["Ruby on Rails", "React", "PostgreSQL", "Redis", "WebSockets", "AI/ML", "Microservices"]
  },
  {
    id: "qoala-senior",
    role: "Senior Software Engineer",
    company: "Qoala Insurtech",
    period: "March 2023 – April 2025",
    achievements: [
      "Crafted an innovative conversation analyzer tool as an AWS Lambda function, suggesting actionable insights to boost operational efficiency",
      "Engineered an AI-integrated service using Flask, enabling Google Vision-powered image-to-text conversion with structured data extraction pipeline via AWS SQS queues",
      "Collaborated on FastAPI-based Elasticsearch wrapper service, transitioning price list data to enable complex recommendation algorithms and search capabilities"
    ],
    skills: ["Python", "AWS Lambda", "Flask", "FastAPI", "Elasticsearch", "AI/ML", "Google Vision API"]
  },
  {
    id: "qoala-engineer",
    role: "Software Engineer",
    company: "Qoala Insurtech", 
    period: "April 2021 – February 2023",
    achievements: [
      "Spearheaded redesign of accounting workflows and visualization tools, incorporating MLM account accounting, affiliate commission allocation, and refund management",
      "Devised robust campaign management system for discount coupons, tailoring incentives to stimulate sales according to campaign guidelines",
      "Pioneered prepaid credit system and overhauled existing postpaid credit scheme, augmenting financial flexibility and control"
    ],
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Campaign Management"]
  },
  {
    id: "qoala-intern",
    role: "Software Engineer Intern",
    company: "Qoala Insurtech",
    period: "November 2020 – March 2021",
    achievements: [
      "Optimized insurance policy purchase process through automated integration of multiple insurers",
      "Implemented LINE chatbot for automated customer query handling and support"
    ],
    skills: ["Python", "API Integration", "Chatbot Development", "LINE API"]
  },
  {
    id: "innovaccer",
    role: "Product Intern",
    company: "Innovaccer",
    period: "May 2020 – July 2020", 
    achievements: [
      "Automated log extraction from multiple sources to single destination",
      "Automated AWS services creation using Terraform",
      "Reduced manual efforts in MS Flow creation processes"
    ],
    skills: ["Terraform", "AWS", "Automation", "Log Management"]
  },
  {
    id: "skillenza",
    role: "Tech Intern",
    company: "Skillenza",
    period: "May 2019 – July 2019",
    achievements: [
      "Set and tested data structures and algorithm-based problems for recruitment drives",
      "Worked on database problems curation and optimization"
    ],
    skills: ["Algorithm Design", "Database Management", "Problem Curation"]
  }
]

export const projects = [
  {
    id: "image-summarizer",
    title: "Image Summarizer",
    description: "AI-powered application that generates concise, meaningful summaries of visual text content using advanced computer vision and NLP algorithms",
    longDescription: "The Image Summarizer App leverages state-of-the-art OCR technology combined with transformer-based summarization models to extract and condense text from images. Built with Python, it processes various image formats and provides contextually relevant summaries.",
    problem: "Difficulty in quickly grasping content from text-heavy images and documents",
    solution: "AI-based text extraction and summarization pipeline using computer vision and NLP",
    outcome: "Reduced text processing time by 80% for users dealing with document-heavy workflows",
    tags: ["AI", "Computer Vision", "NLP", "Python", "Text Summarization"],
    technologies: ["Python", "OpenCV", "Transformers", "OCR", "FastAPI"],
    featured: true,
    status: "completed"
  },
  {
    id: "splitwise-extension", 
    title: "Splitwise Extension",
    description: "Browser extension that enhances Splitwise functionality by enabling bulk transaction uploads from bank statements",
    longDescription: "A Chrome extension that automates the tedious process of manually entering expenses into Splitwise. Users can upload bank statements, and the extension intelligently parses transactions, categorizes them, and bulk uploads to Splitwise with proper splitting logic.",
    problem: "Manual effort required for splitting and uploading bank statement transactions in Splitwise",
    solution: "Automated browser extension with intelligent transaction parsing and bulk upload capabilities",
    outcome: "Streamlined expense management for 2000+ users, reducing manual data entry by 90%",
    tags: ["Browser Extension", "Automation", "Finance", "JavaScript", "Data Processing"],
    technologies: ["JavaScript", "Chrome Extension API", "Python", "FastAPI", "React"],
    featured: true,
    status: "completed"
  },
  {
    id: "data-analyst-ai",
    title: "Data Analyst AI",
    description: "Intelligent bot that interprets natural language queries and generates corresponding SQL commands for data analysis",
    longDescription: "An AI-powered data analysis assistant that bridges the gap between business users and databases. The system uses natural language processing to understand user queries and generates optimized SQL queries, making data analysis accessible to non-technical users.",
    problem: "Complex SQL query generation from natural language is challenging for non-technical users",
    solution: "NLP-powered bot that translates natural language queries into executable SQL commands",
    outcome: "Democratized data access for business users, reducing dependency on technical teams by 60%",
    tags: ["AI", "SQL", "Data Analysis", "NLP", "Bot"],
    technologies: ["Python", "NLP", "SQL", "FastAPI", "OpenAI API"],
    featured: true,
    status: "in-development"
  },
  {
    id: "learning-platform",
    title: "Non-instructor Led Learning Course",
    description: "Adaptive learning platform that makes self-paced education efficient through intelligent problem sequencing",
    longDescription: "An innovative e-learning platform that uses adaptive algorithms to sequence problems based on individual learning patterns. The system tracks user progress and adjusts difficulty levels to maximize learning efficiency.",
    problem: "Traditional self-paced learning lacks structure and personalized progression",
    solution: "Adaptive learning algorithm with intelligent problem hierarchy and progress tracking",
    outcome: "Improved learning efficiency by 40% compared to traditional linear course structures",
    tags: ["E-learning", "Adaptive Learning", "Education Technology", "Algorithm Design"],
    technologies: ["React", "Node.js", "MongoDB", "Machine Learning", "Python"],
    featured: false,
    status: "completed"
  }
]

export const achievements = [
  {
    id: "codeforces",
    title: "Codeforces Expert",
    description: "Highest Rating: 1872 | Current Rating: 1836",
    platform: "Codeforces",
    category: "Competitive Programming",
    url: "https://codeforces.com/profile/titan_12",
    icon: "trophy"
  },
  {
    id: "codechef", 
    title: "CodeChef 5-Star",
    description: "Highest Rating: 2097 | Problems Solved: 110+",
    platform: "CodeChef",
    category: "Competitive Programming", 
    url: "https://www.codechef.com/users/tds115",
    icon: "star"
  },
  {
    id: "hackerearth",
    title: "HackerEarth Top Performer",
    description: "Highest Rating: 1565 | Problems Solved: 376+",
    platform: "HackerEarth",
    category: "Competitive Programming",
    url: "https://www.hackerearth.com/@tds11", 
    icon: "code"
  },
  {
    id: "concordium",
    title: "Open Source Contributor",
    description: "Contributed to Concordium Blockchain Java SDK",
    platform: "GitHub",
    category: "Open Source",
    url: "https://github.com/Concordium",
    icon: "git-branch"
  }
]

export const currentLearning = {
  topics: [
    {
      title: "Advanced Elasticsearch Optimization",
      description: "Deep diving into search relevance tuning and performance optimization techniques",
      status: "in-progress"
    },
    {
      title: "Distributed Systems Architecture", 
      description: "Exploring microservices patterns and system design at scale",
      status: "planned"
    },
    {
      title: "Advanced Machine Learning Operations",
      description: "MLOps best practices for production AI systems",
      status: "in-progress"
    }
  ],
  goals: [
    "Contributing to major open-source AI projects",
    "Building production-scale AI microservices",
    "Publishing technical articles on system design"
  ],
  funFacts: [
    "Built a Squash Court Booking System during college",
    "Solved 500+ competitive programming problems", 
    "Mentored 20+ junior developers at Qoala"
  ]
}