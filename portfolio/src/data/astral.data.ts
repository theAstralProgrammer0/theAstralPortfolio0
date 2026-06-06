import { PortfolioData } from "./portfolio";

export const astralPortfolioData: PortfolioData = {
  personal: {
    name: "Temitayo Daisi-Oso",
    title: "Software Engineer | AI Engineer | Full-Stack Developer",
    tagline: "Building intelligent, scalable solutions across AI, health-tech, blockchain, and government sectors",
    summary: "Results-driven Software Engineer and AI Engineer with 7+ years of experience delivering scalable full-stack applications, AI-powered products, digital transformation projects, and blockchain solutions across multiple industries. Currently building TheoEMR — an AI-powered Electronic Medical Records and TeleHealth platform. NYSC Alumni.",
    contact: {
      phone: "+234 814-230-5514",
      phoneLink: "tel:+2348142305514",
      email: "tdaisioso@gmail.com",
      location: "Lagos, Nigeria",
      portfolio: "https://bit.ly/TemitayoDaisi-Oso",
      linkedin: "https://linkedin.com/in/tdaisioso",
      github: "https://github.com/theAstralProgrammer0",
      discord: "theAstralProgrammer0",
      blog: "https://the-astral-programmer0.hashnode.dev"
    }
  },
  skills: [
    {
      category: "Artificial Intelligence & ML",
      items: [
        "LLM Integration",
        "Prompt Engineering",
        "RAG Systems",
        "OpenAI API",
        "Anthropic Claude",
        "LangChain",
        "Hugging Face",
        "Vector Databases",
        "AI Automation",
        "AI in Health-Tech"
      ]
    },
    {
      category: "Technical Leadership",
      items: ["Agile Project Management", "Team Leadership", "PRD/TDD Documentation", "Sprint Planning", "Architecture Design"]
    },
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Figma", "Vite", "Framer Motion"]
    },
    {
      category: "Backend Engineering",
      items: ["Node.js", "Express", "Django", "Flask", "PostgreSQL", "MongoDB", "Redis", "Prisma", "ASP.NET Core"]
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Docker", "CI/CD", "Bash Scripting", "VPS Management", "Nginx", "Hostinger", "Vercel", "Deployment Automation"]
    },
    {
      category: "Blockchain Development",
      items: ["Solidity", "Smart Contracts", "NFT Development", "IPFS", "Hardhat", "Web3.js", "Pinata SDK", "OpenSea API"]
    },
    {
      category: "Systems & Low-Level",
      items: ["C", "C++", "Rust", "Go", "Assembly", "Linux", "Systems Programming", "UNIX Shell"]
    }
  ],
  workExperience: [
    {
      id: "xeventy",
      title: "Chief Technology Officer & Lead Engineer",
      company: "Xeventy2.0 Health Limited",
      companyUrl: "https://x2h.vercel.app",
      location: "Lagos, Nigeria",
      startDate: "2024-12",
      endDate: "Present",
      current: true,
      featured: true,
      overview: "Leading the design, development, and deployment of TheoEMR — a data-secure, AI-powered Electronic Medical Records and TeleHealth platform with a focus on privacy, interoperability, and multi-device responsiveness.",
      responsibilities: [
        "Architecting and building TheoEMR — an AI-powered EMR system integrating LLM-driven clinical note generation and RAG-based medical knowledge retrieval",
        "Spearheading planning and execution of multiple application suites for the Xeventy2.0 Health digital platform",
        "Developed full-stack landing page using Next.js, React, TypeScript, and Tailwind CSS",
        "Built Django backend API integrating PostgreSQL and Redis for persistence and caching",
        "Integrating AI automation into patient interaction flows and clinical decision support",
        "Creating UI/UX designs for multi-device compatibility using Figma"
      ],
      achievements: [
        "Reduced initial load time by 90% through strategic caching mechanisms",
        "Seeded PostgreSQL database with custom health articles, increasing user retention by 25%",
        "Reduced overall project costs by 100% through strategic open-source implementation",
        "Designed and prototyped AI-assisted clinical documentation reducing physician entry time by an estimated 60%"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Redis", "Tailwind CSS", "OpenAI API", "LangChain", "RAG", "Figma"]
    },
    {
      id: "lasisma",
      title: "Project Manager & Lead Engineer",
      company: "Lagos State Informal Space Management Authority",
      companyUrl: "https://lasisma.com.ng",
      location: "Lagos, Nigeria",
      startDate: "2025-07",
      endDate: "2026-01",
      current: false,
      featured: true,
      overview: "Orchestrated and built a robust public-facing web application for Lagos State's digital transformation initiative, enabling citizens to interact with informal space management services online.",
      responsibilities: [
        "Built React frontend using Vite with TypeScript, implementing responsive and scalable architecture",
        "Provided PRD and TDD documentation based on stakeholder requirements",
        "Designed user interfaces in Figma with focus on responsiveness, usability, and government accessibility standards",
        "Created Entity Relation Map (ERM) for efficient relational database management",
        "Coordinated with government stakeholders to translate policy requirements into technical specifications"
      ],
      achievements: [
        "Engineered seamless design-to-code flow, accelerating UI implementation cycles by 55%",
        "Wrote automation scripts that reduced time-to-deploy by 70%",
        "Deployed and maintained frontend application on Hostinger with high uptime reliability",
        "Delivered state-level digital portal serving thousands of Lagos residents"
      ],
      technologies: ["React", "Vite", "TypeScript", "Figma", "PostgreSQL", "Hostinger"]
    },
    {
      id: "globalrelocate",
      title: "Backend Engineer",
      company: "Global Relocate",
      companyUrl: "https://globalrelocate.com",
      location: "Remote",
      startDate: "2025-10",
      endDate: "2025-12",
      current: false,
      featured: true,
      overview: "Restructured and optimised backend architecture for a global relocation platform, improving performance, maintainability, and deployment reliability.",
      responsibilities: [
        "Restructured backend architecture for improved scalability and code maintainability",
        "Optimised PostgreSQL queries and implemented Prisma ORM for type-safe database access",
        "Migrated application from shared hosting to VPS for improved performance and control",
        "Implemented a tax calculator feature serving users across multiple jurisdictions"
      ],
      achievements: [
        "Reduced database query response time by 40% through strategic indexing and Prisma optimisation",
        "Successfully migrated application to VPS with zero downtime",
        "Built relocation tax calculator covering 20+ countries"
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "VPS", "Linux"]
    },
    {
      id: "letsrock",
      title: "Technical YouTube Scriptwriter",
      company: "LetsRock Media",
      companyUrl: "#",
      location: "Remote",
      startDate: "2024-09",
      endDate: "2024-11",
      current: false,
      featured: false,
      overview: "Produced high-quality technical content scripts for YouTube, translating complex engineering concepts into accessible narratives for a broad developer audience.",
      responsibilities: [
        "Researched and wrote in-depth technical scripts on software engineering topics",
        "Automated content pipeline using scripting tools to accelerate production",
        "Collaborated with video production team on pacing and technical accuracy"
      ],
      achievements: [
        "Delivered 10+ scripts averaging 2,500+ words covering topics from systems programming to web architecture"
      ],
      technologies: ["Technical Writing", "Content Automation", "Bash Scripting"]
    },
    {
      id: "ticquette",
      title: "Founder & CEO",
      company: "Ticquette LLC",
      companyUrl: "https://github.com/theAstralProgrammer0/Ticquette",
      location: "Lagos, Nigeria",
      startDate: "2024-08",
      endDate: "2024-09",
      current: false,
      featured: true,
      overview: "Founded and built Ticquette — a blockchain dApp enabling artists and creators to mint NFTs, manage metadata via IPFS, and list directly on OpenSea.",
      responsibilities: [
        "Designed and developed Solidity smart contracts for NFT minting and ownership management",
        "Integrated IPFS via Pinata SDK for decentralised metadata and asset storage",
        "Built Express.js backend connecting Web3.js to the Ethereum network",
        "Implemented OpenSea API integration for marketplace listing automation"
      ],
      achievements: [
        "Launched functional NFT minting dApp with end-to-end IPFS and OpenSea pipeline",
        "Deployed smart contracts on Ethereum testnet with full test coverage via Hardhat"
      ],
      technologies: ["Solidity", "IPFS", "Pinata SDK", "Express.js", "Web3.js", "Hardhat", "OpenSea API", "Ethereum"]
    },
    {
      id: "giveaid",
      title: "Lead Engineer",
      company: "GiveAid Foundation",
      companyUrl: "https://github.com/theAstralProgrammer0/giveaid",
      location: "Lagos, Nigeria",
      startDate: "2023-06",
      endDate: "2023-07",
      current: false,
      featured: false,
      overview: "Built a full-stack donation platform enabling non-profit fundraising with integrated PayStack payment processing.",
      responsibilities: [
        "Developed full-stack web application using React frontend and Node.js backend",
        "Integrated PayStack payment gateway for secure donation processing",
        "Implemented donor management and campaign tracking features"
      ],
      achievements: [
        "Delivered production-ready donation platform within 4 weeks",
        "Integrated PayStack with 100% transaction success rate in testing"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "PayStack"]
    },
    {
      id: "ipnx",
      title: "Systems Administrator (Intern)",
      company: "ipNX Nigeria Limited",
      companyUrl: "https://ipnx.com.ng",
      location: "Lagos, Nigeria",
      startDate: "2017-07",
      endDate: "2018-01",
      current: false,
      featured: false,
      overview: "Maintained IT infrastructure and supported network operations for one of Nigeria's leading broadband and ICT service providers.",
      responsibilities: [
        "Performed infrastructure maintenance including server configuration and hardware management",
        "Assisted with network troubleshooting across enterprise client environments",
        "Documented technical procedures and maintained IT asset registers"
      ],
      achievements: [
        "Gained hands-on experience with enterprise-grade network infrastructure",
        "Supported 99.9% uptime for critical network services during internship period"
      ],
      technologies: ["Linux", "Networking", "Server Administration", "Wireshark"]
    }
  ],
  education: [
    {
      id: "nysc",
      institution: "National Youth Service Corps (NYSC)",
      degree: "Certificate of National Service",
      field: "Alumni",
      startDate: "2025-07",
      endDate: "2026-06",
      highlights: [
        "Completed mandatory national service as an engineer contributing to digital transformation",
        "NYSC Alumni 🇳🇬"
      ]
    },
    {
      id: "alx",
      institution: "ALX Software Engineering Program",
      degree: "Nanodegree in Software Engineering",
      field: "Backend Engineering Specialization",
      startDate: "2023-04",
      endDate: "2025-10",
      highlights: [
        "Specialization in Backend Engineering",
        "Foundations in Software Engineering and Leadership Training",
        "Completed projects in C, Python, JavaScript, and DevOps"
      ]
    },
    {
      id: "unilag",
      institution: "University of Lagos",
      degree: "Bachelor of Science",
      field: "Electrical Electronics Engineering",
      startDate: "2017-07",
      endDate: "2023-03",
      highlights: [
        "Member of Society of Electrical Engineering Students (S.E.E.S)",
        "Participant in Professor Ayodele Awojobi Design Competition"
      ]
    }
  ],
  certifications: [
    {
      id: "alx-cert",
      name: "ALX Software Engineer and Full-Stack Developer",
      issuer: "ALX Africa",
      url: "https://savanna.alxafrica.com/certificates/JZeHCNc9nX",
      category: "technical"
    },
    {
      id: "hr-se",
      name: "HackerRank Software Engineer",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/a8cde1c70e36",
      category: "technical"
    },
    {
      id: "hr-react",
      name: "HackerRank Frontend React Developer",
      issuer: "HackerRank",
      category: "technical"
    },
    {
      id: "hr-python",
      name: "HackerRank Python Programmer",
      issuer: "HackerRank",
      category: "technical"
    },
    {
      id: "hr-ps",
      name: "HackerRank Problem Solving",
      issuer: "HackerRank",
      category: "technical"
    },
    {
      id: "pmp",
      name: "Project Management Professional",
      issuer: "Alpha Consultancy",
      category: "professional"
    },
    {
      id: "cctv",
      name: "CCTV Installation",
      issuer: "City & Guilds",
      category: "installation"
    },
    {
      id: "electrical",
      name: "Electrical Installation",
      issuer: "City & Guilds",
      category: "installation"
    }
  ],
  publications: [
    {
      id: "web-arch",
      title: "What Happens When You Type google.com in Your Browser and Press Enter",
      url: "https://the-astral-programmer0.hashnode.dev/what-happens-when-you-type-googlecom-in-your-browser-and-press-enter",
      description: "Deep dive into web architecture, DNS resolution, HTTP protocols, and browser rendering processes",
      topics: ["Web Architecture", "DNS", "HTTP", "Networking"]
    },
    {
      id: "ssh-clone",
      title: "Cloning a Repository via SSH Authentication",
      url: "https://the-astral-programmer0.hashnode.dev",
      description: "A practical guide to setting up SSH keys, configuring your git environment, and securely cloning repositories",
      topics: ["Git", "SSH", "Security", "DevOps"]
    },
    {
      id: "pat-clone",
      title: "Cloning via HTTPS with Fine-Grained Personal Access Token (PAT)",
      url: "https://the-astral-programmer0.hashnode.dev",
      description: "How to generate and use GitHub fine-grained PATs for secure HTTPS-based repository access",
      topics: ["Git", "GitHub", "Security", "Authentication"]
    },
    {
      id: "debug-pause",
      title: "Why Is My Program Not Pausing?",
      url: "https://the-astral-programmer0.hashnode.dev",
      description: "Debugging fundamentals: understanding buffering, I/O, and why programs behave unexpectedly",
      topics: ["Debugging", "C", "Systems Programming", "I/O"]
    }
  ],
  awards: [
    {
      id: "vwda3",
      title: "VWDA 3.0 BGA Hackathon Participant",
      organization: "Blockchain for Good Alliance",
      date: "2024-12",
      url: "https://x.com/DrAdaku/status/1872660959908806693"
    }
  ],
  pricingPlans: [
    {
      id: "fulltime",
      title: "Full-Time",
      subtitle: "For major projects",
      price: "$700",
      period: "month",
      description: "Dedicated full-time development for your critical projects — 40+ hrs/week with priority support.",
      features: [
        "40+ hours per week",
        "Daily standups available",
        "Priority Slack/Discord support",
        "Full-stack development",
        "DevOps & deployment included",
        "Technical architecture design",
        "Unlimited revisions",
        "Weekly progress reports"
      ],
      highlighted: true,
      availability: "1 slot available",
      cta: "Hire Full-Time"
    },
    {
      id: "parttime",
      title: "Part-Time",
      subtitle: "For ongoing support",
      price: "$7",
      period: "hour",
      description: "Flexible part-time engagement — 20 hrs/week, perfect for continuous development and maintenance.",
      features: [
        "20 hours per week",
        "Flexible scheduling",
        "Business-day support",
        "Code reviews included",
        "Monthly sprint planning",
        "Documentation included"
      ],
      availability: "2 slots available",
      cta: "Start Part-Time"
    },
    {
      id: "contract",
      title: "Contract",
      subtitle: "For specific deliverables",
      price: "Custom",
      period: "year",
      description: "Project-based engagement with clear milestones and deliverables — billed hourly or per project.",
      features: [
        "Fixed scope projects",
        "Milestone-based delivery",
        "Technical consultation",
        "Project management",
        "Quality assurance",
        "Post-launch support (30 days)"
      ],
      availability: "Always available",
      cta: "Discuss Project"
    }
  ],
  languages: ["English (Native)", "French (Professional)", "German (Professional)"],
  resumeUrl: "/resume.pdf",
  cvUrl: "/cv.pdf"
};
