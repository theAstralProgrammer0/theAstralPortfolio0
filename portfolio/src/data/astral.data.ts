import { PortfolioData } from "./portfolio";

export const astralPortfolioData: PortfolioData = {
  personal: {
    name: "Temitayo Daisi-Oso",
    title: "Software Engineer | Project Manager | Full-Stack Developer",
    tagline: "Building scalable solutions across blockchain, health-tech, and government sectors",
    summary: "Results-driven Software Engineer and Project Manager with 7+ years of experience delivering scalable full-stack applications, digital transformation projects, and blockchain solutions across multiple industries.",
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
      category: "Technical Leadership",
      items: ["Agile Project Management", "Team Leadership", "PRD/TDD Documentation", "Sprint Planning"]
    },
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Figma"]
    },
    {
      category: "Backend Engineering",
      items: ["Node.js", "Express", "Django", "Flask", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Docker", "CI/CD", "Bash Scripting", "VPS Management", "Deployment Automation"]
    },
    {
      category: "Blockchain Development",
      items: ["Solidity", "Smart Contracts", "NFT Development", "IPFS", "Hardhat"]
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
      overview: "Leading development and deployment of a data-secure and interoperable EMR system with focus on privacy, security, and multi-device responsiveness.",
      responsibilities: [
        "Spearheading planning and execution of multiple application suites for digital health platform",
        "Developed full-stack landing page using Next.js, React, TypeScript, and Tailwind CSS",
        "Built Django backend API integrating PostgreSQL and Redis for persistence and caching",
        "Creating UI/UX designs for multi-device compatibility"
      ],
      achievements: [
        "Reduced initial load time by 90% through strategic caching mechanisms",
        "Seeded PostgreSQL database with custom health articles, increasing user retention by 25%",
        "Reduced overall project costs by 100% through strategic open-source implementation"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Redis", "Tailwind CSS"]
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
      overview: "Orchestrated and built robust frontend web application for state-level digital transformation project serving public-facing users in Lagos State.",
      responsibilities: [
        "Built React frontend using Vite with TypeScript, implementing responsive and scalable architecture",
        "Provided PRD and TDD documentation based on stakeholder requirements",
        "Designed user interfaces in Figma with focus on responsiveness and usability",
        "Created Entity Relation Map (ERM) for efficient relational database management"
      ],
      achievements: [
        "Engineered seamless design-to-code flow, accelerating UI implementation cycles by 55%",
        "Wrote automation scripts that reduced time-to-deploy by 70%",
        "Deployed and maintained frontend application on Hostinger with high uptime reliability"
      ],
      technologies: ["React", "Vite", "TypeScript", "Figma", "PostgreSQL"]
    },
    // Add other experiences following the same pattern
  ],
  education: [
    {
      id: "alx",
      institution: "ALX Software Engineering Program",
      degree: "Nanodegree in Software Engineering",
      field: "Backend Engineering Specialization",
      startDate: "2023-04",
      endDate: "2025-10",
      highlights: [
        "Specialization in Backend Engineering",
        "Foundations in Software Engineering and Leadership Training"
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
    }
    // Add others
  ],
  publications: [
    {
      id: "web-arch",
      title: "What Happens When You Type google.com in Your Browser and Press Enter",
      url: "https://the-astral-programmer0.hashnode.dev/what-happens-when-you-type-googlecom-in-your-browser-and-press-enter",
      description: "Deep dive into web architecture, DNS resolution, HTTP protocols, and browser rendering processes",
      topics: ["Web Architecture", "DNS", "HTTP", "Networking"]
    }
    // Add other publications
  ],
  awards: [
    {
      id: "vwda3",
      title: "VWDA 3.0 BGA Hackathon Participant",
      organization: "Blockchain for Good Alliance",
      date: "2024-12",
      url: "https://x.com/DrAdaku/status/1872660959908806693"
    }
    // Add others
  ],
  languages: ["English (Native)", "French (Professional)", "German (Professional)"],
  resumeUrl: "/resume.pdf",
  cvUrl: "/cv.pdf"
};
