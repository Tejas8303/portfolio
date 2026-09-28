export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: "Full Stack" | "Cloud / DevOps" | "Frontend";
  tags: string[];
  image: string;
  gradient: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  challenges: string;
  impact: string;
  architecture: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  logo: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; iconName: string; popular?: boolean }[];
}

export interface Achievement {
  id: string;
  title: string;
  stat: string;
  subtext: string;
  icon: string;
  color: string;
  link?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Tejas Kumar",
    role: "Software Engineering Intern & Full Stack Developer",
    tagline: "Building scalable software, cloud-native DevOps pipelines, and high-performance applications.",
    bio: "Passionate Software Engineer pursuing B.S. in Mathematics and computing at IIT Patna and working as a Software Engineering Intern at Vivriti Capital. Experienced in building cloud infrastructure, CI/CD pipelines, containerized microservices, high-throughput REST APIs, and competitive algorithm problem solving.",
    location: "Chennai, India",
    phone: "8248116055",
    email: "kumartejas063@gmail.com",
    github: "https://github.com/Tejas8303",
    linkedin: "https://www.linkedin.com/in/tejas-kumar-07b46925a",
    codeforces: "https://codeforces.com/profile/alter_ego_3003",
    resumeUrl: "https://drive.google.com/file/d/1-tsACQqD5YhHg7ZPyf4PeTtcNi6PvBKl/view?usp=sharing",
    availability: "Available for SDE & DevOps Roles",
    status: "Software Engineering Intern @ Vivriti Capital | Codeforces Specialist (1638)",
    lastUpdated: "August 16th, 2026",
  },

  achievements: [
    {
      id: "codeforces",
      title: "Codeforces Specialist",
      stat: "1638",
      subtext: "Maximum Rating | Specialist on Codeforces",
      icon: "Trophy",
      color: "from-purple-500 to-indigo-500",
      link: "https://codeforces.com/profile/alter_ego_3003",
    },
    {
      id: "dsa",
      title: "DSA Problems Solved",
      stat: "400+",
      subtext: "Solved on LeetCode, GFG, CodingNinjas",
      icon: "Code2",
      color: "from-blue-500 to-cyan-400",
      link: "https://codolio.com/profile/Tejas_01",
    },
    {
      id: "global-round-30",
      title: "Codeforces Global Round 30",
      stat: "1151st",
      subtext: "Secured globally (Div. 1 + Div. 2) among thousands of participants",
      icon: "Trophy",
      color: "from-amber-400 to-orange-500",
      link: "https://codeforces.com/profile/alter_ego_3003",
    },
    {
      id: "cf-round-934",
      title: "Codeforces Round 934",
      stat: "1216th",
      subtext: "Ranked globally out of more than 13,181 candidates (Div 2)",
      icon: "Trophy",
      color: "from-emerald-400 to-teal-500",
      link: "https://codeforces.com/profile/alter_ego_3003",
    },
    {
      id: "jee-mains",
      title: "JEE Mains 2022",
      stat: "94.59 %ile",
      subtext: "Secured 48505 rank out of more than 9 lakh candidates",
      icon: "GraduationCap",
      color: "from-cyan-400 to-blue-600",
    },
    {
      id: "iitp",
      title: "IIT Patna",
      stat: "B.S.",
      subtext: "Mathematics and computing (Nov. 2022 – May. 2026)",
      icon: "GraduationCap",
      color: "from-cyan-400 to-teal-500",
    },
  ] as Achievement[],

  experience: [
    {
      id: "vivriti",
      role: "Software Engineering Intern",
      company: "Vivriti Capital",
      location: "Chennai, India",
      period: "Jan. 2026 – July. 2026",
      current: true,
      type: "Internship",
      description:
        "Engineered automated CI/CD workflows, provisioned cloud infrastructure following Infrastructure as Code (IaC) principles, managed containerized microservices on Kubernetes, and optimized code quality and security checks.",
      achievements: [
        "Engineered automated CI/CD pipelines using GitHub Actions, Jenkins, and Azure Pipelines to accelerate build cycles and standardize deployment workflows.",
        "Developed and maintained scalable application infrastructure on Kubernetes and Amazon EKS, ensuring high availability and fault tolerance for backend services.",
        "Programmed infrastructure-as-code automation on AWS (EC2, IAM) using Terraform and Ansible, eliminating manual configuration bottlenecks.",
        "Utilized Linux and Bash scripting for automation tasks and integrated SonarQube into the development lifecycle to enforce code quality standards and automate security vulnerability checks.",
      ],
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Amazon EKS",
        "Terraform",
        "Ansible",
        "Jenkins",
        "GitHub Actions",
        "Azure Pipelines",
        "ArgoCD",
        "Helm",
        "Linux",
        "Bash",
        "SonarQube",
        "IAM",
        "EC2",
        "CI/CD",
        "Microservices",
      ],
      logo: "VC",
    },
  ] as Experience[],

  education: [
    {
      id: "IIT-Patna",
      degree: "B.S in Mathematics and computing",
      institution: "Indian Institute of Technology Patna",
      location: "Patna, Bihar, India",
      period: "Nov. 2022 – May. 2026",
      grade: "Bachelor of Science",
      description:
        "Specialized in Programming & Data Structures, Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, Database Management Systems, Numerical Linear Algebra, Complex Analysis, Discrete Mathematics, Probability Theory & Statistics, Digital Systems, Computer Architecture, and Theory of Computation.",
      highlights: [
        "Specialist on Codeforces with a maximum rating of 1638",
        "Secured 1151st rank globally in Codeforces Global Round 30 (Div. 1 + Div. 2) among thousands of participants",
        "Ranked 1216th globally out of more than 13,181 candidates in Codeforces Round 934 (Div 2)",
        "Solved over 400 problems on online platforms like LeetCode, GFG, CodingNinjas",
      ],
    },
    {
      id: "class-12th",
      degree: "Senior Secondary (Class 12th)",
      institution: "Saraswati Vidya Mandir Inter College Belrayan Kheri",
      location: "Belrayan Kheri, Uttar Pradesh, India",
      period: "July 2021",
      grade: "85%",
      description:
        "Completed Class 12th senior secondary education with 85% score.",
      highlights: [
        "Achieved 85% aggregate score in Senior Secondary (Class 12th)",
        "Secured 94.59 percentile and 48505 rank out of more than 9 lakh candidates in JEE Mains 2022",
      ],
    },
  ] as Education[],

  projects: [
    {
      id: "enterprise-recruitment",
      title: "Enterprise-Grade Recruitment Platform",
      subtitle: "2026 | Role-Based Candidate Matching & Document Management Engine",
      description:
        "Designed and implemented a role-based matching portal, optimizing the application workflow with interactive analytics dashboards, search indexers, and multi-tier query filters.",
      fullDescription:
        "Designed and implemented a role-based matching portal, optimizing the application workflow with interactive analytics dashboards, search indexers, and multi-tier query filters. Automated applicant document management by building a high-speed file storage layer using Multer and built-in Express static routing, replacing third-party cloud dependencies to eliminate external API overhead. Accelerated developer onboarding and deployment alignment by containerizing backend and frontend services with Docker, facilitating single-command environment setups.",
      category: "Full Stack",
      tags: ["MERN Stack", "REST APIs", "Tailwind CSS", "PDFKit", "Docker Compose", "Git"],
      image: "/projects/recruitment.webp",
      gradient: "from-blue-600/20 via-cyan-500/10 to-indigo-600/20",
      githubUrl: "https://github.com/Tejas8303/recruitment-portal",
      liveUrl: "https://recruitment-portal-frontend-95iq.onrender.com",
      featured: true,
      highlights: [
        "Designed and implemented a role-based matching portal, optimizing the application workflow with interactive analytics dashboards, search indexers, and multi-tier query filters.",
        "Automated applicant document management by building a high-speed file storage layer using Multer and built-in Express static routing, replacing third-party cloud dependencies to eliminate external API overhead.",
        "Accelerated developer onboarding and deployment alignment by containerizing backend and frontend services with Docker, facilitating single-command environment setups.",
      ],
      challenges: "Eliminating third-party cloud storage dependencies while sustaining high-speed document ingestion and multi-role query filtering.",
      impact: "Reduced third-party API overhead and streamlined developer onboarding to a single Docker command.",
      architecture: ["React / Tailwind UI", "Node.js & Express REST Gateway", "MongoDB Database", "Multer File Storage Layer", "Docker Compose"],
    },
    {
      id: "medicure",
      title: "Medicure - Online Doctor Appointment System",
      subtitle: "2024 | Scalable Healthcare Scheduling & Multi-Role Patient Portal",
      description:
        "Designed and developed a scalable doctor appointment management system with role-based dashboards for admins, doctors, and patients, enhancing operational efficiency.",
      fullDescription:
        "Designed and developed a scalable doctor appointment management system with role-based dashboards for admins, doctors, and patients, enhancing operational efficiency. Implemented JWT authentication for secure user access and optimized database performance using MongoDB and Mongoose. Integrated Cloudinary for efficient image storage and developed a responsive UI using ReactJS and Tailwind CSS.",
      category: "Full Stack",
      tags: ["MongoDB", "ReactJS", "Express", "Node.js", "Tailwind CSS", "Cloudinary"],
      image: "/projects/medicure.webp",
      gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-600/20",
      githubUrl: "https://github.com/Tejas8303/Medicure",
      liveUrl: "https://medicure-frontend-elvv.onrender.com/",
      featured: true,
      highlights: [
        "Designed and developed a scalable doctor appointment management system with role-based dashboards for admins, doctors, and patients, enhancing operational efficiency.",
        "Implemented JWT authentication for secure user access and optimized database performance using MongoDB and Mongoose.",
        "Integrated Cloudinary for efficient image storage and developed a responsive UI using ReactJS and Tailwind CSS.",
      ],
      challenges: "Optimizing database queries and schema indexes to handle rapid concurrent appointment bookings across multiple doctor specialties.",
      impact: "Enhanced patient booking efficiency with secure JWT role-based access for admins, doctors, and patients.",
      architecture: ["ReactJS Frontend", "Express & Node.js API Gateway", "MongoDB & Mongoose DB Layer", "Cloudinary Storage", "JWT Middleware"],
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "C / C++", level: 95, iconName: "Terminal", popular: true },
        { name: "Java", level: 90, iconName: "Code", popular: true },
        { name: "Python", level: 88, iconName: "FileCode" },
        { name: "JavaScript", level: 95, iconName: "Code", popular: true },
        { name: "HTML", level: 98, iconName: "Layers" },
        { name: "CSS", level: 96, iconName: "Palette" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS (EC2, IAM)", level: 92, iconName: "Cloud", popular: true },
        { name: "Docker & Kubernetes", level: 92, iconName: "Container", popular: true },
        { name: "Amazon EKS", level: 88, iconName: "Boxes", popular: true },
        { name: "Terraform & Ansible", level: 86, iconName: "Boxes", popular: true },
        { name: "GitHub Actions", level: 94, iconName: "GitBranch", popular: true },
        { name: "Jenkins & Azure Pipelines", level: 88, iconName: "GitBranch" },
        { name: "ArgoCD & Helm", level: 84, iconName: "Boxes" },
        { name: "Linux & Bash Scripting", level: 92, iconName: "Terminal", popular: true },
        { name: "SonarQube & CI/CD", level: 90, iconName: "Shield", popular: true },
        { name: "Microservices", level: 90, iconName: "Network", popular: true },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: "Server",
      skills: [
        { name: "React.js", level: 95, iconName: "Atom", popular: true },
        { name: "Node.js & Express.js", level: 94, iconName: "Server", popular: true },
        { name: "Spring Boot & Spring MVC", level: 88, iconName: "Cpu", popular: true },
        { name: "Spring Data JPA & Security", level: 86, iconName: "Shield" },
        { name: "Hibernate", level: 85, iconName: "Database" },
        { name: "REST APIs & JWT Auth", level: 96, iconName: "Network", popular: true },
        { name: "TailwindCSS & Bootstrap", level: 95, iconName: "Palette", popular: true },
        { name: "Pandas, NumPy & PyTorch", level: 82, iconName: "Cpu" },
      ],
    },
    {
      title: "Databases",
      icon: "Database",
      skills: [
        { name: "MySQL", level: 90, iconName: "Table", popular: true },
        { name: "MongoDB", level: 92, iconName: "Database", popular: true },
        { name: "SQLite", level: 85, iconName: "Database" },
        { name: "Firebase", level: 84, iconName: "Zap" },
      ],
    },
    {
      title: "Developer Tools",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: 95, iconName: "GitCommit", popular: true },
        { name: "Maven", level: 88, iconName: "FileText" },
        { name: "Postman", level: 92, iconName: "Network", popular: true },
        { name: "VS Code", level: 96, iconName: "Code", popular: true },
        { name: "VirtualBox", level: 82, iconName: "Boxes" },
        { name: "MySQL Workbench", level: 86, iconName: "Table" },
        { name: "MongoDB Atlas", level: 90, iconName: "Database", popular: true },
      ],
    },
  ] as SkillCategory[],

  coursework: [
    "Programming & Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Computer Networks",
    "Operating Systems",
    "Database Management Systems",
    "Numerical Linear Algebra",
    "Complex Analysis",
    "Discrete Mathematics",
    "Probability Theory & Statistics",
    "Digital Systems",
    "Computer Architecture",
    "Theory of Computation",
  ],

  testimonials: [
    {
      id: "1",
      quote:
        "Tejas consistently delivers clean, high-performance software and automation. During his DevOps internship at Vivriti Capital, he built robust CI/CD pipelines, managed EKS clusters, and provisioned AWS infrastructure with Terraform.",
      author: "Engineering Lead",
      role: "DevOps & Cloud Lead",
      company: "Vivriti Capital",
      avatar: "/avatars/lead.webp",
    },
    {
      id: "2",
      quote:
        "Tejas is an exceptional problem solver. His Specialist rank on Codeforces and deep understanding of Mathematics & Computing at IIT Patna shine through in every complex algorithm and system architecture he builds.",
      author: "Department Faculty",
      role: "Department of Mathematics & Computing",
      company: "IIT Patna",
      avatar: "/avatars/prof.webp",
    },
  ],

  githubStats: {
    username: "Tejas8303",
    publicRepos: 15,
    totalCommits: 150,
    activeStatus: "Consistent Development & Code Activity",
    topLanguages: [
      { name: "C++", percentage: 35, color: "#F34B7D" },
      { name: "JavaScript / React", percentage: 30, color: "#F7DF1E" },
      { name: "Java / Spring", percentage: 15, color: "#b07219" },
      { name: "Python", percentage: 10, color: "#3572A5" },
      { name: "HCL / Shell", percentage: 10, color: "#89E051" },
    ],
  },
};

