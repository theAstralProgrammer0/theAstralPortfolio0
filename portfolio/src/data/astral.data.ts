/*
 * This file contains all portfolio data for Astral 
 * Updated with information from CV
 */

import { PortfolioData } from "@/types/portfolio";

export const astralPortfolioData: PortfolioData = {
  personal: {
    name: "Temitayo Daisi-Oso",
    title: "Software Engineer | Project Manager | Full-Stack Developer",
    tagline: "Building scalable solutions across blockchain, health-tech, entertainment, and government sectors",
    summary: "Innovative Software Engineer and Technical Project Manager with hands-on experience delivering scalable, secure, and user-centric digital products across government, health-tech, fintech, blockchain, and media sectors. Proven track record leading full-stack development, backend architecture, DevOps automation, and cross-functional teams on high-impact projects. Strong background in Electrical & Electronics Engineering, with a pragmatic, execution-driven approach to system design, performance optimization, and cost efficiency across the product lifecycle.",
    contact: {
      phone: "+234 814-230-5514",
      phoneLink: "https://wa.me/2348142305514",
      email: "theastralprogrammer0@outlook.com",
      location: "Lagos, Nigeria",
      portfolio: "https://theastralprogrammer0.vercel.app",
      linkedin: "https://linkedin.com/in/tdaisioso",
      github: "https://github.com/theAstralProgrammer0",
      discord: "https://discord.com/users/1136228617655943239",
      blog: "https://the-astral-programmer0.hashnode.dev"
    }
  },
  skills: [
    {
      category: "Technical Leadership",
      items: ["Agile Project Management", "Team Leadership", "PRD/TDD Documentation", "Sprint Planning", "Product Management", "Code Reviews"]
    },
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Figma", "Vite"]
    },
    {
      category: "Backend Engineering",
      items: ["Node.js", "Express", "Django", "Flask", "PostgreSQL", "MongoDB", "Redis", "Prisma", "API Development"]
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Docker", "CI/CD", "Bash Scripting", "VPS Management", "Deployment", "Automation", "Migration", "Hostinger"]
    },
    {
      category: "Blockchain Development",
      items: ["Solidity", "Smart Contract Development", "NFT", "IPFS", "PinataSDK", "Hardhat", "Web3.js", "OpenSea"]
    },
    {
      category: "Additional Technical Skills",
      items: ["Python", "JavaScript", "C", "C++", "HTML/CSS", "Git", "PayStack Integration", "AI Integration"]
    },
    {
      category: "Soft Skills",
      items: ["Leadership", "Critical Thinking", "Problem-Solving", "Effective Communication", "Teamwork", "Adaptability", "Strategic Thinking"]
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
        "Creating UI/UX designs for multi-device compatibility, focusing on enhanced responsiveness",
        "Developed full-stack landing page using Next.js, React, TypeScript, and Tailwind CSS",
        "Built Django backend API integrating PostgreSQL and Redis for persistence and caching",
        "Integrated front- and backend APIs seamlessly in alignment with design requirements",
        "Populated database with custom article contents provided by the digital health company"
      ],
      achievements: [
        "Reduced initial load time by 90% through strategic caching mechanisms",
        "Increased user retention by 25% by seeding PostgreSQL database with custom health articles",
        "Reduced overall project costs by 100% through strategic open-source implementation",
        "Successfully deployed front- and backend apps"
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
        "Built React frontend using Vite with TypeScript and CSS languages",
        "Provided PRD and TDD documentation based on approved stakeholder meetings",
        "Storyboarded User Journeys and crafted User Stories for user-centric approach",
        "Designed user interfaces in Figma with focus on responsiveness and usability",
        "Designed Entity Relation Map (ERM) to bolster efficient data storage and retrieval for relational database",
        "Handled deployment and hosting responsibilities, ensuring platform uptime and reliability"
      ],
      achievements: [
        "Engineered seamless design-to-code flow, accelerating UI implementation cycles by 55%",
        "Delivered scalable and dynamic frontend architecture that supports continued development",
        "Wrote automation scripts that reduced time-to-deploy by 70%",
        "Deployed frontend application to Hostinger with high uptime reliability"
      ],
      technologies: ["React", "Vite", "TypeScript", "CSS", "Figma", "PostgreSQL", "Hostinger"]
    },
    {
      id: "global-relocate",
      title: "Backend Engineer",
      company: "Global Relocate",
      companyUrl: "https://globalrelocate.com",
      location: "Hamburg, Germany",
      startDate: "2025-10",
      endDate: "2025-12",
      current: false,
      featured: true,
      overview: "Joined the project mid-development to restructure and align the backend with frontend requirements. Focused exclusively on backend engineering tasks, optimizing database structure and data flow.",
      responsibilities: [
        "Redesigned backend architecture using PostgreSQL and Prisma schema to ensure seamless integration with frontend",
        "Implemented robust body validation parsers to maintain data integrity and prevent corruption",
        "Integrated AI-driven content generation to dynamically populate the database with updated information",
        "Managed migration of backend from one VPS to another, ensuring zero data loss and minimal downtime",
        "Created deployment scripts to streamline updates from local development to production environments",
        "Developed German tax calculator and laid groundwork for future country-specific tax tools"
      ],
      achievements: [
        "Reduced AI prompting costs by approximately 77% through optimized resource usage",
        "Seeded PostgreSQL database with AI-generated content for up to 250 countries efficiently",
        "Ensured 100% data preservation during migration, eliminating potential data loss",
        "Developed dynamic backend for streamlining data retrieval and population, reducing manual intervention by 100%"
      ],
      technologies: ["PostgreSQL", "Prisma", "Node.js", "AI Integration", "VPS", "DevOps"]
    },
    {
      id: "letsrock",
      title: "Technical YouTube Scriptwriter",
      company: "LetsRock Media",
      companyUrl: "https://www.youtube.com/@stellaradocde",
      location: "Tuttlingen, Germany",
      startDate: "2024-09",
      endDate: "2024-11",
      current: false,
      featured: false,
      overview: "Crafted engaging, data-driven YouTube scripts and streamlined the content production pipeline for a digital media brand, directly contributing to sustained audience growth and retention.",
      responsibilities: [
        "Researched and authored scripts tailored to targeted audience demographics and channel tone",
        "Analyzed engagement metrics (likes, shares, comments) to refine content direction",
        "Developed internal tools to automate and optimize script ideation and delivery workflows",
        "Maintained rigorous delivery schedule to meet content deadlines consistently"
      ],
      achievements: [
        "Boosted viewer retention and engagement by 60% through analytical storytelling techniques",
        "Enhanced production efficiency by 33%, reducing content turnaround time without sacrificing quality"
      ],
      technologies: ["Content Analytics", "Automation Tools", "Workflow Optimization"]
    },
    {
      id: "ticquette",
      title: "Founder & Chief Executive Officer",
      company: "Ticquette LLC",
      companyUrl: "https://github.com/theAstralProgrammer0/ticquette",
      location: "Lagos, Nigeria",
      startDate: "2024-08",
      endDate: "2024-09",
      current: false,
      featured: true,
      overview: "Spearheaded the conceptualization, engineering, and development of a blockchain dapp that mints a Kiosk Space object into a simple NFT object, persists its metadata and Auto-Lists the NFT on OpenSea for sale or auction.",
      responsibilities: [
        "Conceived and designed product and its Unique Value Proposition for hackathon",
        "Designed entire backend infrastructure and interaction with smart contract layer",
        "Developed Express backend and Solidity smart contract to mint and persist Ticquette NFTs",
        "Implemented CRUD operations to store NFT Metadata",
        "Utilized Pinata SDK to pin NFT Metadata and obtained metadata CID for referencing on IPFS"
      ],
      achievements: [
        "Reduced overall project costs by 100% through strategic implementation of open-source and free solutions",
        "Successfully built scalable backend API and smart contract handling NFT metadata pinning, article posting, data caching, and other features",
        "Implemented Auto-Listing for successfully minted Ticquette NFTs on OpenSea, eliminating manual listing",
        "Finished as one of the best projects in the Hackathon and partook in pool prize"
      ],
      technologies: ["Solidity", "Express", "Node.js", "IPFS", "Pinata SDK", "OpenSea", "Smart Contracts", "NFT"]
    },
    {
      id: "giveaid",
      title: "Lead Engineer",
      company: "GiveAid Foundation",
      companyUrl: "https://give-aid.vercel.app/",
      location: "Lagos, Nigeria",
      startDate: "2023-06",
      endDate: "2023-07",
      current: false,
      featured: false,
      overview: "Directed a small engineering team to deliver a full-stack web application for a philanthropic initiative, focusing on secure donation processing and backend performance optimization.",
      responsibilities: [
        "Oversaw end-to-end development and deployment of a feature-rich donation platform",
        "Conducted agile sprints, code reviews, and team retrospectives to maintain development velocity",
        "Integrated PayStack for secure online payments, improving donor trust and platform usability",
        "Designed and implemented secure refresh token system for user authentication",
        "Streamlined engineering processes and tooling"
      ],
      achievements: [
        "Improved backend performance by 55% through secure tokenization and optimization techniques",
        "Enhanced overall team efficiency by 75% through better workflow design and task delegation"
      ],
      technologies: ["Full-Stack Development", "PayStack", "Authentication", "Agile", "Team Leadership"]
    },
    {
      id: "ipnx",
      title: "Systems Administrator (Intern)",
      company: "ipNX Nigeria Limited",
      companyUrl: "https://ipnxnigeria.net",
      location: "Lagos, Nigeria",
      startDate: "2017-07",
      endDate: "2018-01",
      current: false,
      featured: false,
      overview: "Supported the IT infrastructure of a leading telecommunications provider by maintaining systems, onboarding users, and resolving network issues to improve overall uptime and performance.",
      responsibilities: [
        "Ran tests on hardware to detect faults and performed procurement duties by reaching out to vendors",
        "Onboarded new staff and installed essential software on their machines",
        "Performed diagnostics and resolved hardware and software issues, both on-site and remotely",
        "Configured and maintained on-premises bare-metal servers for internal operations",
        "Delivered routine maintenance and troubleshooting of network components"
      ],
      achievements: [
        "Reduced employee downtime by 90% through proactive server configuration and hardware issue resolution",
        "Installed essential software and prepared workstations for over 20 new employees",
        "Improved network stability by 70% via Root-Cause analysis and rapid troubleshooting"
      ],
      technologies: ["Systems Administration", "Hardware Management", "Network Troubleshooting", "Server Configuration"]
    }
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
        "Foundations in Software Engineering",
        "Foundations in Leadership Training",
        "Participated in leadership program organized by ALX in partnership with Mastercard"
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
        "Participated in Professor Ayodele Awojobi Design Competition (P.A.A.D.C)",
        "Member of Nigerian Society of Engineers, Lagos (N.S.E)"
      ]
    },
    {
      id: "nysc",
      institution: "National Youth Service Corps",
      degree: "NYSC Certificate",
      field: "National Service",
      startDate: "2025-07",
      endDate: "Present",
      highlights: [
        "Acquired Certification in Electrical Installation (City and Guilds)",
        "Acquired Certification in CCTV Installation (City and Guilds)",
        "Elected group leader during SAED training"
      ]
    },
    {
      id: "secondary",
      institution: "Good Shepherd Schools",
      degree: "Senior Secondary School Certificate Examination",
      field: "Secondary Education",
      startDate: "2010-09",
      endDate: "2016-09",
      highlights: [
        "Graduated with 8 distinctions and 1 credit",
        "Elected 'Punctuality Prefect'",
        "Vice-President of the Jets Club Society"
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
      id: "hr-intern",
      name: "HackerRank Software Engineering Intern",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/df395bb8d265",
      category: "technical"
    },
    {
      id: "hr-problem",
      name: "HackerRank Problem Solving",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/ad4df539f61d",
      category: "technical"
    },
    {
      id: "hr-python",
      name: "HackerRank Python Programmer",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/7990790988bb",
      category: "technical"
    },
    {
      id: "hr-react",
      name: "HackerRank Frontend React",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/8271dcc48621",
      category: "technical"
    },
    {
      id: "pmp",
      name: "Project Management Professional",
      issuer: "Alpha Consultancy",
      url: "https://drive.google.com/file/d/19CN4CD-n1kZTCLQPEBq-WT4hmq-baI1G/view?usp=sharing",
      category: "professional"
    },
    {
      id: "cctv",
      name: "CCTV Camera Installation",
      issuer: "City and Guilds",
      url: "https://drive.google.com/file/d/12H1ZnaU2iMGXWiHMbQnt-Z8-AdXTKfUl/view",
      category: "installation"
    },
    {
      id: "electrical",
      name: "Electrical Installation",
      issuer: "City and Guilds",
      url: "https://drive.google.com/file/d/19ziNIuedz9Y3u_oKUhlcSHPIIUhyIYLd/view?usp=sharing",
      category: "installation"
    }
  ],
  publications: [
    {
      id: "1",
      title: "What Happens When You Type google.com in Your Browser and Press Enter",
      url: "https://the-astral-programmer0.hashnode.dev/what-happens-when-you-type-googlecom-in-your-browser-and-press-enter",
      description: "A deep dive into what really happens under the hood when a URL is entered in a browser, covering DNS resolution, TCP handshakes, HTTP requests, and browser rendering.",
      topics: ["Web Architecture", "DNS", "HTTP", "Networking", "Browsers"]
    },
    {
      id: "2",
      title: "Cloning a Repository via SSH Authentication",
      url: "https://the-astral-programmer0.hashnode.dev/clone-repo-via-ssh-auth",
      description: "A practical guide to cloning GitHub repositories securely using SSH keys, including setup, configuration, and common pitfalls.",
      topics: ["Git", "GitHub", "SSH", "Version Control", "Security"]
    },
    {
      id: "3",
      title: "Cloning a Repository via HTTPS with Fine-Grained Personal Access Token (PAT)",
      url: "https://the-astral-programmer0.hashnode.dev/cloning-a-repository-via-https-with-fine-grained-personal-access-token-pat",
      description: "A security-focused walkthrough on cloning repositories over HTTPS using GitHub fine-grained Personal Access Tokens instead of passwords.",
      topics: ["Git", "GitHub", "HTTPS", "Access Control", "Security"]
    },
    {
      id: "4",
      title: "Why Is My Program Not Pausing?",
      url: "https://the-astral-programmer0.hashnode.dev/why-is-my-program-not-pausing",
      description: "An explanation of common reasons programs fail to pause as expected, especially for beginners, covering input buffering, execution flow, and language-specific behavior.",
      topics: ["Debugging", "Programming Fundamentals", "Control Flow", "Beginner Pitfalls"]
    }
  ], 
  pricingPlans: [
    {
      id: "1",
      title: "Full-Time",
      subtitle: "Dedicated Development",
      price: "$700",
      period: "month",
      description: "Perfect for long-term projects requiring dedicated attention",
      features: [
        "40+ hours per week",
        "Priority support",
        "Weekly progress reports",
        "Unlimited revisions",
        "Project management included"
      ],
      highlighted: false,
      cta: "Start Full-Time Project",
      color: "primary"
    },
    {
      id: "2",
      title: "Part-Time",
      subtitle: "Flexible Collaboration",
      price: "$7",
      period: "hour",
      description: "Ideal for ongoing maintenance or smaller feature development",
      features: [
        "20 hours per week",
        "Business-day support",
        "Bi-weekly updates",
        "Up to 3 revisions",
        "Basic project management"
      ],
      highlighted: true,
      cta: "Choose Part-Time",
      color: "secondary"
    },
    {
      id: "3",
      title: "Contract",
      subtitle: "Project-Based Work",
      price: "Custom",
      period: "year",
      description: "Best for specific features or short-term projects",
      features: [
        "Hourly billing",
        "Flexible scheduling",
        "Clear project scope",
        "2 revision rounds",
        "Direct communication"
      ],
      highlighted: false,
      cta: "Hire Contract",
      color: "accent"
    }
  ],
  featuredProjects: [
    {
      id: "1",
      title: "monty",
      description: "This is the repository where I implement the operations of a stack",
      category: "DSA",
      tags: ["C", "Brainfuck"],
      imageUrl: "/images/projects-dsa.png",
      githubUrl: "https://github.com/theAstralProgrammer0/monty",
      featured: false
    },
    {
      id: "2",
      title: "TodoAPI - Task Manager",
      description: "An ASP.NET Core backend project that demonstrates ability to build Web APIs and deploy them in docker containers",
      category: "API & DevOps",
      tags: [".NET", "C#", "Shell", "Docker", "Dockerfile"],
      imageUrl: "/images/projects-api.png",
      githubUrl: "https://github.com/theAstralProgrammer0/aspnetcore-todo-docker",
      featured: false
    },
    {
      id: "3",
      title: "Simple Shell",
      description: "This is a lightweight, minimalistic, custom implementation of the UNIX-Shell.",
      category: "Low-Level Engineering",
      tags: ["C", "Makefile"],
      imageUrl: "/images/projects-ll-eng.png",
      githubUrl: "https://github.com/theAstralProgrammer0/simple_shell",
      featured: false
    },
    {
      id: "4",
      title: "Portfolio Website V3",
      description: "Current portfolio with smooth scrolling, parallax effects, and advanced animations. Built with Next.js 14, Framer Motion, and Lenis for ultra-smooth scrolling experience.",
      category: "Web Development",
      tags: ["Next.js", "Framer Motion", "Lenis", "TypeScript", "Tailwind"],
      imageUrl: "/images/projects-web-dev.png",
      liveUrl: "https://theastralprogrammer0.vercel.app",
      githubUrl: "https://github.com/theAstralProgrammer0/portfolio",
      featured: false
    }
  ],
  awards: [
    {
      id: "alx-leader",
      title: "Leadership Program by ALX & MasterCard",
      organization: "ALX X MasterCard",
      date: "2023-04",
      url: "https://www.alxafrica.com/"
    },
    {
      id: "vwda3",
      title: "VWDA 3.0 BGA Hackathon Winner",
      organization: "Blockchain for Good Alliance",
      date: "2024-12",
      url: "https://x.com/DrAdaku/status/1872660959908806693"
    },
    {
      id: "vwda2",
      title: "VWDA 2.0 Aleo Foundation Hackathon Winner",
      organization: "Aleo Foundation",
      date: "2024-08",
      url: "https://x.com/DrAdaku/status/1748778320362176595"
    },
    {
      id: "genzhack",
      title: "GenZHackFest Attendee",
      organization: "University of Lagos",
      date: "2023-09",
      url: "https://photos.google.com/share/AF1QipOMu1iJOiOysEnJ2iMkYwtpRfIiye9MkPJ3qbZ-3emRUDjPaNOVD_Xp3kBulQ4U_g/photo/AF1QipNndTBl3BNe2be2Q06R1jA5HhIMTRK1tIdQRqb3?key=bW9MRkRwd1hTUFBXcndQbTZOdGtZYVE5eTNseWdn"
    },
    {
      id: "hacktober",
      title: "Hacktober Fest Attendee",
      organization: "University of Lagos",
      date: "2023-10",
      url: "https://www.linkedin.com/posts/dscunilag_hacktoberfest-opensource-gdscunilag-activity-7117932063369891840-itFC?utm_source=share&utm_medium=member_desktop"
    }
  ],
  languages: ["English (Native)", "German (Professional)", "French (Professional)"],
  resumeUrl: "/resume.pdf",
  cvUrl: "/cv.pdf"
};

