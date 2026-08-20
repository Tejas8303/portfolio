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
    bio: "Passionate Software Engineer pursuing B.S. in Mathematics & Computing at IIT Patna and working as a DevOps Software Engineering Intern at Vivriti Capital. Experienced in building cloud infrastructure, CI/CD pipelines, containerized microservices, high-throughput REST APIs, and competitive algorithm problem solving.",
    location: "Remote / India",
    phone: "8303747346",
    email: "kumartejas063@gmail.com",
    github: "https://github.com/Tejas8303",
    linkedin: "https://www.linkedin.com/in/tejas-kumar-07b46925a",
    codeforces: "https://codeforces.com/profile/alter_ego_3003",
    resumeUrl: "https://drive.google.com/file/d/1mLZqsFDYqsGx_k2yJx_AOfLj8fqDVsgf/view?usp=drive_link",
    availability: "Available for SDE & DevOps Roles",
    status: "Software Engineering Intern @ Vivriti Capital | Codeforces Specialist (1638)",
    lastUpdated: "July 16th, 2026",
  },

  achievements: [
    {
      id: "codeforces",
      title: "Codeforces Specialist",
      stat: "1638",
      subtext: "Max Rating | Competitive Programming",
      icon: "Trophy",
      color: "from-purple-500 to-indigo-500",
      link: "https://codeforces.com/profile/alter_ego_3003",
    },
    {
      id: "dsa",
      title: "DSA Problems Solved",
      stat: "400+",
      subtext: "LeetCode, Codeforces, GFG, CodingNinjas",
      icon: "Code2",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "global-round-30",
      title: "Codeforces Global Round 30",
      stat: "1151st",
      subtext: "Global Rank (Div 1 + Div 2)",
      icon: "Trophy",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "cf-round-934",
      title: "Codeforces Round 934",
      stat: "1216th",
      subtext: "Global Rank out of 13,181+ candidates",
      icon: "Trophy",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "jee-mains",
      title: "JEE Mains 2022",
      stat: "94.59 %ile",
      subtext: "AIR 48,505 out of 9+ Lakh Candidates",
      icon: "GraduationCap",
      color: "from-cyan-400 to-blue-600",
    },
    {
      id: "iitp",
      title: "IIT Patna",
      stat: "B.S.",
      subtext: "Mathematics & Computing (2022–2026)",
      icon: "GraduationCap",
      color: "from-cyan-400 to-teal-500",
    },
  ] as Achievement[],

  experience: [
    {
      id: "vivriti",
      role: "Software Engineering Intern",
      company: "Vivriti Capital",
      location: "Chennai, Tamil Nadu, India",
      period: "Jan. 2026 – July 2026",
      current: true,
      type: "Internship",
      description:
        "Engineered automated CI/CD workflows, provisioned cloud infrastructure following Infrastructure as Code (IaC) principles, managed containerized microservices on Kubernetes, and optimized code quality and security checks.",
      achievements: [
        "Built and maintained CI/CD pipelines using GitHub Actions, Jenkins, and Azure Pipelines to automate build, test, and deployment workflows.",
        "Deployed and managed containerized applications on Kubernetes and Amazon EKS, ensuring scalable and reliable application delivery.",
        "Provisioned and managed cloud infrastructure on AWS using Terraform, Ansible, EC2, and IAM following Infrastructure as Code practices.",
        "Utilized Linux and Bash scripting for automation tasks and integrated SonarQube into CI/CD pipelines to improve code quality and security checks.",
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
        "Linux",
        "Bash",
        "SonarQube",
        "IAM",
        "IAC",
        "EC2",
        "CI/CD",
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
        "Specialized in Data Structures, Algorithms, Computer Networks, Operating Systems, Database Management Systems, Computer Architecture, Discrete Mathematics, and Probability Theory.",
      highlights: [
        "Codeforces Specialist with peak rating of 1638",
        "Global rank 1151st in Codeforces Global Round 30 & rank 1216th in Round 934",
        "Coursework: Programming & Data Structures, Algorithms, OOP, Networks, OS, DBMS, Linear Algebra, Stochastics, Theory of Computation",
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
        "Achieved 85% aggregate score",
        "Secured 94.59 percentile (AIR 48505) out of 9+ Lakh candidates in JEE Mains 2022",
      ],
    },
  ] as Education[],

  projects: [
    {
      id: "enterprise-recruitment",
      title: "Enterprise-Grade Recruitment Platform",
      subtitle: "Role-Based Candidate Matching & Document Management Engine",
      description:
        "Role-based matching portal optimizing recruitment workflows with interactive analytics dashboards, high-speed document storage, search indexers, and multi-tier query filters.",
      fullDescription:
        "Designed and implemented an enterprise candidate recruitment engine with multi-role access (Recruiters & Applicants). Built a custom high-speed document storage layer using Multer and Express static routing to replace expensive third-party cloud storage APIs. Containerized both frontend and backend services using Docker Compose for single-command environment setup.",
      category: "Full Stack",
      tags: ["MERN Stack", "REST APIs", "Tailwind CSS", "PDFKit", "Docker Compose", "Git", "Multer"],
      image: "/projects/recruitment.webp",
      gradient: "from-blue-600/20 via-cyan-500/10 to-indigo-600/20",
      githubUrl: "https://github.com/Tejas8303/recruitment-portal",
      liveUrl: "https://recruitment-portal-frontend-95iq.onrender.com",
      featured: true,
      highlights: [
        "Designed role-based matching portal optimizing workflow with analytics dashboards and multi-tier filters",
        "Built high-speed local document storage layer with Multer & Express static routing, eliminating third-party API overhead",
        "Containerized frontend and backend services with Docker Compose for seamless single-command onboarding",
      ],
      challenges: "Eliminating third-party document hosting costs while maintaining rapid stream response times and secure multi-role authorization.",
      impact: "Reduced infrastructure costs and streamlined developer onboarding to a single `docker compose up` command.",
      architecture: ["React / Tailwind UI", "Node.js & Express REST Gateway", "MongoDB Database", "Multer File Storage Layer", "Docker Compose"],
    },
    {
      id: "medicure",
      title: "Medicure - Online Doctor Appointment System",
      subtitle: "Healthcare Scheduling & Multi-Role Patient Portal",
      description:
        "Scalable doctor appointment management system featuring role-based dashboards for admins, doctors, and patients with secure JWT auth and optimized MongoDB performance.",
      fullDescription:
        "Medicure bridges healthcare providers and patients by enabling seamless slot discovery, appointment booking, medical history management, and role-based administration dashboards. Features JWT authentication, Mongoose indexing for high query throughput, Cloudinary media storage, and a responsive Tailwind CSS interface.",
      category: "Full Stack",
      tags: ["MongoDB", "ReactJS", "Express", "Node.js", "Tailwind CSS", "Cloudinary", "JWT"],
      image: "/projects/medicure.webp",
      gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-600/20",
      githubUrl: "https://github.com/Tejas8303/Medicure",
      liveUrl: "https://medicure-frontend-elvv.onrender.com/",
      featured: true,
      highlights: [
        "Role-based dashboards for admins, doctors, and patients enhancing operational workflow efficiency",
        "Implemented JWT authentication and optimized MongoDB database performance using indexing and Mongoose",
        "Integrated Cloudinary for efficient image and document storage with responsive ReactJS & Tailwind UI",
      ],
      challenges: "Optimizing database queries and schema indexes to handle rapid concurrent appointment bookings across multiple doctor specialties.",
      impact: "Enhanced patient booking efficiency by 40% with zero double-booking conflicts.",
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
        { name: "HTML / CSS", level: 98, iconName: "Layers" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS (EC2, EKS, IAM, S3)", level: 90, iconName: "Cloud", popular: true },
        { name: "Docker & Docker Compose", level: 92, iconName: "Container", popular: true },
        { name: "Kubernetes & Helm", level: 88, iconName: "Boxes", popular: true },
        { name: "Terraform & Ansible", level: 85, iconName: "Boxes", popular: true },
        { name: "GitHub Actions", level: 92, iconName: "GitBranch", popular: true },
        { name: "Jenkins & Azure Pipelines", level: 86, iconName: "GitBranch" },
        { name: "Linux & Bash Scripting", level: 90, iconName: "Terminal", popular: true },
        { name: "SonarQube & ArgoCD", level: 84, iconName: "Shield" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: "Server",
      skills: [
        { name: "React.js", level: 95, iconName: "Atom", popular: true },
        { name: "Node.js & Express.js", level: 94, iconName: "Server", popular: true },
        { name: "Spring Boot & Spring MVC", level: 88, iconName: "Cpu", popular: true },
        { name: "Spring Data JPA & Security", level: 85, iconName: "Shield" },
        { name: "REST APIs & JWT Auth", level: 96, iconName: "Network", popular: true },
        { name: "TailwindCSS & Bootstrap", level: 95, iconName: "Palette", popular: true },
        { name: "Pandas, NumPy & PyTorch", level: 82, iconName: "Database" },
      ],
    },
    {
      title: "Databases & Tools",
      icon: "Database",
      skills: [
        { name: "MongoDB & Atlas", level: 92, iconName: "Database", popular: true },
        { name: "MySQL & Workbench", level: 88, iconName: "Table" },
        { name: "SQLite", level: 85, iconName: "Database" },
        { name: "Firebase", level: 84, iconName: "Zap" },
        { name: "Git & GitHub", level: 95, iconName: "GitCommit", popular: true },
        { name: "Maven & Postman", level: 90, iconName: "FileText" },
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

