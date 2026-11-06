import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Rajat Katnoria",
  shortName: "Rajat",
  title: "Full-Stack Developer | Software Engineer",
  badge: "Available for Opportunities",
  location: "Himachal Pradesh, India",
  email: "rajat70184@gmail.com",
  linkedin: "https://linkedin.com/in/rajatkatnoria",
  github: "https://github.com/rajat020-cloud",
  avatarUrl: "/rajat-katnoria.jpg",
  bio: "I'm a Software Engineering undergraduate and Full-Stack Developer passionate about building scalable web applications, intelligent systems, and seamless digital experiences. I enjoy transforming complex problems into practical, user-friendly solutions.",
  aboutExtended: [
    "Currently pursuing my B.E. in Computer Science & Engineering at Chitkara University, I focus on building robust end-to-end architectures, performant RESTful APIs, and responsive interfaces that prioritize user needs.",
    "My hands-on experience spans freelance engineering at AVBT Technologies—where I develop WhatsApp CRM integrations and storefront systems—to designing AI-powered platforms and role-based administrative systems.",
    "I believe great software is where disciplined engineering principles meet intuitive, creative design."
  ],
  stats: [
    { label: "Core CS & Dev Skills", value: "20+" },
    { label: "Production & Academic Projects", value: "4+" },
    { label: "Specialized Certifications", value: "6" },
    { label: "B.E. CSE Graduation", value: "2027" },
  ]
};

export const highlightCards = [
  {
    title: "Full-Stack Development",
    icon: "Layers",
    description: "End-to-end web architectures using modern React, Next.js, and Node.js environments with clean separation of concerns.",
    tags: ["React", "Next.js", "Node.js", "State Mgmt"]
  },
  {
    title: "REST API Development",
    icon: "Cpu",
    description: "Architecting modular, secure, and documented RESTful endpoints with JWT authentication and strict role validation.",
    tags: ["Express.js", "JWT", "RBAC", "Postman"]
  },
  {
    title: "Database Management",
    icon: "Database",
    description: "Designing structured schemas, relational databases with MySQL, and scalable document stores with MongoDB & Firebase.",
    tags: ["MongoDB", "MySQL", "Firebase", "Schema Design"]
  },
  {
    title: "AI Integration",
    icon: "Sparkles",
    description: "Incorporating generative intelligence, LLM APIs (Gemini API), and automated conversational workflows into web products.",
    tags: ["Gemini API", "Meta WhatsApp API", "Intelligent Systems"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "C", tag: "System Programming" },
      { name: "C++", tag: "DSA & OOP" },
      { name: "Java", tag: "Enterprise & OOP" },
      { name: "JavaScript (ES6+)", tag: "Modern Web" },
      { name: "SQL", tag: "Relational Queries" },
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", tag: "Components & Hooks" },
      { name: "Next.js", tag: "SSR & App Router" },
      { name: "HTML5", tag: "Semantic Markup" },
      { name: "CSS3 / Tailwind CSS", tag: "Modern Styling" },
    ]
  },
  {
    title: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", tag: "Event-driven Runtime" },
      { name: "Express.js", tag: "REST Microservices" },
      { name: "REST APIs", tag: "API Design & Spec" },
      { name: "Authentication", tag: "JWT & Access Control" },
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MongoDB", tag: "NoSQL Document Store" },
      { name: "MySQL", tag: "Relational RDBMS" },
      { name: "Firebase", tag: "Realtime & Cloud Store" },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    skills: [
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "CI/CD & Collaboration" },
      { name: "Postman", tag: "API Testing & Docs" },
      { name: "VS Code", tag: "Development Environment" },
      { name: "Meta WhatsApp APIs", tag: "Business Messaging" },
    ]
  },
  {
    title: "Cloud & Deployment",
    icon: "Cloud",
    skills: [
      { name: "Vercel", tag: "Frontend & Edge Hosting" },
      { name: "Render", tag: "Backend Web Services" },
    ]
  },
  {
    title: "Core Computer Science",
    icon: "Binary",
    skills: [
      { name: "Data Structures & Algorithms", tag: "Problem Solving" },
      { name: "Object-Oriented Programming (OOP)", tag: "Software Design" },
      { name: "Database Management Systems (DBMS)", tag: "Data Integrity" },
      { name: "Operating Systems", tag: "Processes & Memory" },
      { name: "Computer Networks", tag: "Protocols & Web" },
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Freelance Full-Stack Developer",
    company: "AVBT Technologies",
    type: "Freelance / Contract",
    period: "October 2026 – Present",
    location: "Remote",
    liveUrl: "https://market.prajnaa.in",
    description: "Spearheading storefront user experience enhancements and custom enterprise communication workflows for e-commerce clients.",
    responsibilities: [
      "Contributing to Prajnaa Market's storefront UI (market.prajnaa.in) and continuously improving shopping workflows for smoother customer checkout.",
      "Developing a dedicated WhatsApp CRM solution to organize customer inquiries, order statuses, and lead information.",
      "Integrating official Meta WhatsApp Cloud APIs for automated, real-time transactional messaging and customer updates.",
      "Connecting storefront checkout information with the CRM through reliable, asynchronous backend integration.",
      "Configuring reusable WhatsApp interactive message templates for order notifications and customer communication."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Meta WhatsApp API", "REST APIs", "CRM Architecture"]
  }
];

export const projectsData: Project[] = [
  {
    id: "ai-learning-platform",
    title: "AI Learning Platform",
    subtitle: "Intelligent Curriculum & Learning Assistant",
    category: "AI & Web",
    badge: "AI Powered",
    featured: true,
    description: "A full-stack AI-powered learning platform with intelligent response generation and modular backend microservices.",
    longDescription: "Developed a comprehensive full-stack educational application powered by the Gemini API to assist students with personalized study workflows, smart question answering, and curriculum navigation. Built with a modular backend architecture to guarantee high responsiveness.",
    highlights: [
      "Integrated Google Gemini API for context-aware, educational responses and prompt refinement.",
      "Architected secure RESTful APIs for student authentication, progress tracking, and session management.",
      "Implemented modular backend architecture separating controller, service, and data layers.",
      "Designed an intuitive, responsive UI built with Next.js for high performance and clean client caching."
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Gemini API", "REST APIs", "Tailwind CSS"],
    githubUrl: undefined, // Real placeholder handled cleanly in UI
    liveUrl: "https://ai-learning-platform-umber.vercel.app/",
    architecture: {
      frontend: "Next.js App Router with TypeScript & Tailwind",
      backend: "Node.js service with Gemini AI integration",
      database: "MongoDB for learner profiles & chat histories",
      keyFeature: "Contextual AI learning assistant with automated prompt grounding"
    }
  },
  {
    id: "university-management-system",
    title: "University Management System",
    subtitle: "Role-Based Academic Administration Suite",
    category: "Full-Stack",
    badge: "Enterprise Architecture",
    featured: true,
    description: "A secure, role-based academic platform for students, faculty, and administrators with 12+ verified REST endpoints.",
    longDescription: "Engineered a centralized university administration portal handling distinct permissions for administrators, faculty members, and students. Provides full control over enrollment groups, placement notifications, and AI-assisted student assistance.",
    highlights: [
      "Built rigorous Role-Based Access Control (RBAC) with JWT authentication and secure session tokens.",
      "Designed, documented, and tested 12+ REST APIs for student records, enrollment groups, and grading workflows.",
      "Integrated real-time placement and drive notification broadcasts for graduating batches.",
      "Incorporated AI-assisted student support module for quick campus queries and administrative assistance."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "REST APIs"],
    githubUrl: undefined,
    liveUrl: undefined,
    architecture: {
      frontend: "React.js with role-based component guards",
      backend: "Express.js API with strict middleware authorization",
      database: "MySQL normalized relational schema",
      keyFeature: "Multi-tier RBAC for Students, Faculty, and Admin boards"
    }
  },
  {
    id: "team-task-manager",
    title: "Team Task Manager",
    subtitle: "Collaborative Productivity & Project Tracker",
    category: "Full-Stack",
    badge: "Deployed to Production",
    featured: true,
    description: "Collaborative task management platform with status tracking, analytics dashboard, and automated overdue monitoring.",
    longDescription: "Built a collaborative workspace tool enabling engineering teams to organize sprints, assign action items, and monitor overdue deadlines. Successfully deployed the frontend on Vercel and the backend web service on Render.",
    highlights: [
      "Implemented task assignment, multi-project grouping, and status state machines (To-Do, In-Progress, Review, Done).",
      "Built real-time dashboard analytics tracking sprint velocities and task completion ratios.",
      "Engineered automated overdue monitoring and warning flags for pressing deliverables.",
      "Production deployment with frontend on Vercel and backend microservice on Render."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Render"],
    githubUrl: undefined,
    liveUrl: "https://team-task-manager01.vercel.app/",
    architecture: {
      frontend: "React SPA deployed on Vercel CDN",
      backend: "Node.js / Express deployed on Render cloud service",
      database: "MongoDB Atlas cluster with indexed queries",
      keyFeature: "Automated deadline monitoring & team task delegation"
    }
  },
  {
    id: "online-voting-system",
    title: "Online Voting System",
    subtitle: "Secure & Responsive Balloting Engine",
    category: "Frontend",
    badge: "Reliable Client Logic",
    featured: false,
    description: "A responsive balloting client featuring strict duplicate-vote prevention, input validation, and dynamic state management.",
    longDescription: "Engineered an accessible, high-reliability voting application focused on election integrity at the client level. Features comprehensive verification checks to prevent duplicate submissions, instant tally calculation, and reusable modular UI components.",
    highlights: [
      "Implemented strict client-side validation and duplicate-vote prevention mechanisms.",
      "Architected clean, reusable UI components for candidate cards, ballots, and live result tally.",
      "Built responsive state management guaranteeing zero loss of voter selections during navigation.",
      "Optimized for high accessibility with clear visual contrasts and keyboard navigation support."
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "CSS3", "State Management"],
    githubUrl: undefined,
    liveUrl: undefined,
    architecture: {
      frontend: "React.js with declarative component architecture",
      backend: "State management pipeline with duplicate-submission guard",
      database: "Client-side state & session persistence",
      keyFeature: "Tamper-resistant duplicate vote prevention mechanism"
    }
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "Chitkara University",
    location: "Himachal Pradesh, India",
    period: "2023 – 2027",
    status: "Undergraduate (Pursuing)",
    highlights: [
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming, and Web Engineering.",
      "Active participant in technical symposiums, hackathons, and software engineering practicals.",
      "Strong foundation in Operating Systems, Database Management Systems, and Computer Networks."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Introduction to Modern AI and Applied AI",
    issuer: "Cisco Networking Academy",
    category: "Technical",
    description: "Covering applied machine intelligence, modern neural frameworks, and practical AI implementations.",
    icon: "Cpu"
  },
  {
    title: "Hybrid Cloud Fundamentals",
    issuer: "Nutanix",
    category: "Technical",
    description: "Foundations of hybrid infrastructure, hyperconverged cloud environments, and enterprise virtualization.",
    icon: "Cloud"
  },
  {
    title: "C, C++, and Design Thinking",
    issuer: "Infosys Springboard",
    category: "Technical",
    description: "Advanced algorithmic programming, object-oriented concepts, and human-centered design thinking methodologies.",
    icon: "Code2"
  },
  {
    title: "7-Day Special Camp Participation Certificate",
    issuer: "National Service Scheme (NSS)",
    category: "Leadership",
    description: "One-week intensive rural community outreach, social initiative execution, and collaborative camp leadership.",
    icon: "Award"
  },
  {
    title: "Fitness Head & Drill Instructor",
    issuer: "NSS Core Team",
    category: "Leadership",
    description: "Selected to lead physical conditioning, march discipline, and drill regiments for the NSS volunteer contingent.",
    icon: "ShieldCheck"
  },
  {
    title: "Certificate of Appreciation – My Bharat Unity March",
    issuer: "Ministry of Youth Affairs, Govt. of India",
    category: "Leadership",
    description: "Recognized for exemplary participation, organization, and national unity advocacy under the Ministry of Youth Affairs.",
    icon: "Flame"
  }
];
