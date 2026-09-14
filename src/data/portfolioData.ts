import { Project, EducationItem, SkillCategory, Certification, Achievement, LanguageSkill } from '../types';

export const personalInfo = {
  name: "Pavan Sai Ravinutala",
  headline: "Computer Science & Engineering Student",
  specialization: "Full-Stack Development | AI/ML & Computer Vision",
  summary: "Computer Science and Engineering undergraduate at Vignan's Foundation for Science, Technology and Research with an 8.23 CGPA, hands-on experience in full-stack web development, AI/ML, computer vision, data analysis, and database technologies. Experienced in developing practical applications ranging from campus issue management and multi-vendor e-commerce to geospatial change detection and real-time sports tracking. Interested in software engineering, full-stack development, artificial intelligence, machine learning, and computer vision opportunities.",
  location: "Vizianagaram, Andhra Pradesh, India",
  institution: "Vignan's Foundation for Science, Technology and Research (VFSTR), Guntur",
  phone: "8121421778",
  phoneFormatted: "+91 81214 21778",
  emails: [
    "vu.241fa04528@gmail.com",
    "pavansairavinutala@gmail.com"
  ],
  linkedin: "https://www.linkedin.com/in/pavan-sai-ravinutala-77217b2b2/",
  github: "https://github.com/PavanSaiR007",
  cgpa: "8.23 / 10",
  status: "Open to Software Engineering Internships",
  batch: "2024–2028",
};

export const projects: Project[] = [
  {
    id: "orbit-iq",
    title: "Orbit IQ",
    subtitle: "AI-Powered Geospatial Change Detection",
    featured: true,
    highlight: "Smart India Hackathon (SIH) 2026 Problem Statement",
    category: "ai",
    technologies: [
      "Python",
      "Computer Vision",
      "AI/ML",
      "Image Processing",
      "FastAPI",
      "Web Technologies",
      "SAR Imagery"
    ],
    description: [
      "Developed a geospatial intelligence prototype comparing two satellite images of the same location captured on different dates to identify and visualize geographic & structural changes.",
      "Implemented an image-processing pipeline for automated image alignment, change detection, difference-mask generation, and color-coded visualization.",
      "Designed the architecture to support optional Synthetic Aperture Radar (SAR) image input alongside optical satellite imagery for cloud-penetrating analysis.",
      "Integrated AI-generated insights to interpret detected changes and identify emerging environmental or urbanization trends.",
      "Designed functionality for generating visual results and exporting comprehensive analysis into a downloadable PDF report.",
      "Developed and tested the prototype locally as part of the Smart India Hackathon (SIH) 2026 problem statement."
    ],
    demoType: "orbit-iq",
    githubUrl: "https://github.com/PavanSaiR007"
  },
  {
    id: "campus-issue-radar",
    title: "Campus Issue Radar",
    subtitle: "Student Grievance & Infrastructure Resolution Platform",
    featured: true,
    highlight: "Live Deployed on Render with PostgreSQL",
    category: "fullstack",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "PostgreSQL",
      "Node.js Backend",
      "Render"
    ],
    description: [
      "Developed an end-to-end campus issue management platform that empowers students to submit campus complaints/issues and track real-time resolution progress.",
      "Designed and implemented the backend responsible for handling application data and role-based issue-management workflows.",
      "Integrated a persistent PostgreSQL database for relational issue logging, student verification, and administrative audit trails.",
      "Deployed the backend service and database live on Render."
    ],
    demoType: "campus-radar",
    githubUrl: "https://github.com/PavanSaiR007"
  },
  {
    id: "flipazon",
    title: "Flipazon",
    subtitle: "Multi-Vendor E-Commerce Platform",
    featured: true,
    highlight: "Full Marketplace with Vendor Portals",
    category: "fullstack",
    technologies: [
      "Python",
      "Django",
      "HTML5",
      "CSS3",
      "MySQL",
      "Render"
    ],
    description: [
      "Developed a full multi-vendor e-commerce web application leveraging Django's robust architectural framework.",
      "Designed functionality for a marketplace-style ecosystem supporting multiple independent merchant storefronts, product catalogs, and order management.",
      "Implemented relational database integration using MySQL with optimized schemas for inventory, vendors, and consumer checkouts.",
      "Deployed the application in production using Render."
    ],
    githubUrl: "https://github.com/PavanSaiR007"
  },
  {
    id: "library-management",
    title: "Library Management Website",
    subtitle: "Digital Cataloging & Borrowing System",
    category: "web",
    technologies: [
      "Python",
      "Django",
      "PyCharm",
      "SQLite / MySQL"
    ],
    description: [
      "Developed a web-based library management portal using the Django framework.",
      "Implemented the application using PyCharm as the primary IDE and local development environment.",
      "Built digital records management, book search indices, patron accounts, and circulation tracking."
    ],
    githubUrl: "https://github.com/PavanSaiR007"
  },
  {
    id: "f1-race-tracker",
    title: "Real-Time F1 Race Tracker",
    subtitle: "Interactive Grand Prix Telemetry & Standings Dashboard",
    category: "ai",
    technologies: [
      "JavaScript",
      "React",
      "Live Telemetry",
      "Claude AI Assisted"
    ],
    description: [
      "Developed a Formula 1 race-tracking web application crafted with AI-assisted engineering using Claude.",
      "Designed the platform around presenting real-time race-related data, sector splits, and driver telemetry in an interactive interface.",
      "Engineered responsive visualizations for race positions, lap deltas, and live tire strategy analytics."
    ],
    demoType: "f1-tracker",
    githubUrl: "https://github.com/PavanSaiR007"
  }
];

export const education: EducationItem[] = [
  {
    id: "vfstr",
    institution: "Vignan's Foundation for Science, Technology and Research (VFSTR)",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    location: "Vadlamudi, Guntur, Andhra Pradesh",
    period: "2024–2028",
    score: "8.23 / 10",
    scoreLabel: "Current CGPA",
    semesters: [
      { semester: "Semester 1", gpa: 7.64 },
      { semester: "Semester 2", gpa: 7.95 },
      { semester: "Semester 3", gpa: 8.76 },
      { semester: "Semester 4", gpa: 8.49 }
    ],
    details: [
      "Consistent upward academic growth achieving up to 8.76 SGPA in advanced core semesters.",
      "Active participant in Hackathons, Fine Arts Club, Department Sports, and Technical Societies."
    ]
  },
  {
    id: "chaitanya",
    institution: "Chaitanya College",
    degree: "Intermediate / Class XII",
    location: "Vizianagaram, Andhra Pradesh",
    period: "2022–2024",
    score: "876 / 1000",
    scoreLabel: "Score (87.6%)",
    details: [
      "Majored in Mathematics, Physics, and Chemistry (MPC) with distinction."
    ]
  },
  {
    id: "fort-city",
    institution: "Fort City School",
    degree: "Class X — Secondary School Certificate",
    location: "Vizianagaram, Andhra Pradesh",
    period: "Passed 2022",
    score: "549 / 600",
    scoreLabel: "Score (91.5%)",
    details: [
      "Graduated with top honors (91.5%), building early fundamentals in mathematics and sciences."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: ["Python", "Java", "C", "JavaScript", "SQL"]
  },
  {
    title: "Web Development",
    iconName: "Globe",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Node.js", "Django", "FastAPI"]
  },
  {
    title: "AI / Machine Learning & CV",
    iconName: "Cpu",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Image Processing", "SAR Image Analysis"]
  },
  {
    title: "Data Analysis & Visualization",
    iconName: "BarChart3",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Development & DevOps Tools",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "PyCharm", "Render"]
  },
  {
    title: "Computer Science Fundamentals",
    iconName: "Terminal",
    skills: ["Operating Systems", "Computer Networks", "Data Structures", "Database Management"]
  },
  {
    title: "Other Specialized Tools",
    iconName: "Layers",
    skills: ["Cisco Packet Tracer", "Google AI Studio", "Antigravity", "Logic Circuit"]
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-sih",
    title: "Smart India Hackathon (SIH) 2026",
    issuer: "Ministry of Education & AICTE",
    badgeType: "hackathon",
    highlight: "National Hackathon Competitor with Orbit IQ Project"
  },
  {
    id: "cert-intel",
    title: "Intel — AI Sashakt",
    issuer: "Intel",
    badgeType: "ai",
    highlight: "Artificial Intelligence & Edge Compute Foundations"
  },
  {
    id: "cert-codechef",
    title: "500 Difficulty Rating Problem Solver",
    issuer: "CodeChef",
    badgeType: "code",
    highlight: "Data Structures & Algorithmic Problem Solving"
  },
  {
    id: "cert-cisco-os",
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    badgeType: "network",
    highlight: "Kernel, Process Management & OS Internals"
  },
  {
    id: "cert-cisco-js1",
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    badgeType: "code",
    highlight: "Modern JavaScript Core, DOM & Event Systems"
  },
  {
    id: "cert-cisco-js2",
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    badgeType: "code",
    highlight: "Advanced OOP, Async/Await & Modularity"
  },
  {
    id: "cert-nptel",
    title: "English Language for Competitive Examinations",
    issuer: "NPTEL / IIT (Silver Medalist)",
    badgeType: "lang",
    highlight: "Silver Medal Honor for High Examination Percentile"
  },
  {
    id: "cert-cambridge",
    title: "Cambridge English — B2 First / PET",
    issuer: "Cambridge Assessment English",
    badgeType: "lang",
    highlight: "CEFR Level B2 Independent Professional English"
  },
  {
    id: "cert-wowfest",
    title: "Wowfest 2026 Hackathon",
    issuer: "GITAM University",
    badgeType: "hackathon",
    highlight: "Rapid Prototyping & Collaborative Engineering"
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-sih",
    title: "Smart India Hackathon (SIH) 2026 Participation",
    organization: "Ministry of Education & AICTE, Govt. of India",
    category: "Hackathon",
    description: "Competed with 'Orbit IQ', a geospatial intelligence and SAR image change detection solution solving real-world remote sensing challenges."
  },
  {
    id: "ach-guinness",
    title: "Guinness World Record — Largest Yoga Lesson",
    organization: "Ayush Dept., Government of Andhra Pradesh",
    category: "Record",
    description: "Official participant in the historic Guinness World Record event held in Visakhapatnam on International Yoga Day 2025."
  },
  {
    id: "ach-wowfest",
    title: "Wowfest 2026 Hackathon",
    organization: "GITAM University",
    category: "Hackathon",
    description: "Competed in high-intensity software development hackathon solving problem statements under time-constrained sprint conditions."
  },
  {
    id: "ach-arts",
    title: "Fine Arts Club Representative",
    organization: "VFSTR Mahotsav College Festival",
    category: "Club",
    description: "Selected to represent the university Fine Arts Club at the prestigious annual Mahotsav, leading creative exhibitions."
  },
  {
    id: "ach-cricket",
    title: "Department Cricket Championship",
    organization: "CSE Department Athletics, VFSTR",
    category: "Sports",
    description: "Competed as active team player representing Computer Science and Engineering in intra-departmental sports tournament."
  }
];

export const languages: LanguageSkill[] = [
  { name: "Telugu", proficiency: "Native Speaker", level: 100 },
  { name: "English", proficiency: "B2 — Cambridge English Certified", level: 85 },
  { name: "Hindi", proficiency: "Very Fluent", level: 90 },
  { name: "German", proficiency: "Basic / Elementary", level: 30 }
];

export const interests = [
  { name: "Drawing & Painting", icon: "Palette", desc: "Fine arts club contributor & traditional sketching" },
  { name: "Badminton", icon: "Activity", desc: "Competitive recreational court player" },
  { name: "Cricket", icon: "Trophy", desc: "Department tournament athlete & enthusiast" },
  { name: "Technology & Current Affairs", icon: "Cpu", desc: "Keeping track of AI models, space missions & tech advances" }
];
