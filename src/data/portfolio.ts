import { PortfolioData } from '@/types/portfolio';

/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION (Single Source of Truth)
 * =======================================================================
 * Edit your content here without modifying React components.
 * Any item marked with [EDIT] is a placeholder for your custom details.
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: 'Hariharan B',
    role: 'Developer II | Full Stack Software Engineer',
    // Rotating role lines for the Hero section
    typedRoles: [
      'Developer II & POD Lead @ Metayb',
      'Full Stack Software Engineer',
      'React.js & Next.js Architect',
      'Node.js & NestJS Backend Specialist',
      'Scalable System & API Designer',
      'AI-Assisted Engineering Practitioner',
    ],
    // High-impact recruiter-facing value pitch
    tagline: 'Developer II & Engineering POD Lead architecting scalable React, Next.js, and NestJS web applications, distributed APIs, and AI-assisted workflows for multi-domain enterprise platforms.',
    // Professional story for the About section
    story: [
      "I am an experienced Full Stack Software Engineer and Developer II at Metayb Private Limited, leading a high-impact engineering POD across Product, Marketing, Finance, and Sales & Distribution domains.",
      "Throughout my career—including over 5 years at Radiant Cash Management Services Ltd—I have owned end-to-end system architecture, building mission-critical fintech and enterprise platforms where latency, transaction integrity, and security are paramount.",
      "I collaborate directly with cross-functional teams and international clients (including Nigeria), driving projects from discovery to production release using React, Next.js, TypeScript, Node.js, and NestJS.",
      "My engineering approach combines clean modular architecture, AI-assisted development tools for rapid velocity, continuous code quality, and dedicated mentorship across engineering teams.",
    ],
    location: 'Chennai / Tirunelveli, Tamil Nadu, India',
    relocationNote: 'Open to Remote, Hybrid, & Relocation to Chennai / Bangalore / Hyderabad',
    openToWork: true,
    availabilityStatus: 'Available for high-impact engineering opportunities',
    // Resume file path in the public folder
    resumeUrl: './Hariharan_B_Resume.pdf',
    // Start date of professional career (March 2021) for automatic total experience calculation
    startDate: '2021-03-01',
  },

  socials: {
    github: 'https://github.com/hariharan-devx',
    linkedin: 'https://www.linkedin.com/in/hariharan-devx', // [EDIT: Replace with your exact LinkedIn profile URL]
    email: 'hariharanreigns@gmail.com',
    phone: '+91 8098163319', // Protected by click-to-reveal against web scrapers
  },

  // Recruiter metrics strip shown in the Hero section
  stats: [
    {
      label: 'Experience',
      value: 'Auto-computed',
      subtext: 'March 2021 – Present',
      isDynamic: true,
    },
    {
      label: 'Projects Delivered',
      value: '15+', // [EDIT: Update project count, e.g. 15+, 20+]
      subtext: 'Production & Enterprise',
    },
    {
      label: 'Technologies Mastered',
      value: '12+',
      subtext: 'Full Stack & DevOps',
    },
    {
      label: 'Code Quality Rating',
      value: 'SonarQube Clean',
      subtext: 'Zero High-Severity Smells',
    },
  ],

  /**
   * SKILLS LIST
   * Confirmed skills are shown immediately in badges.
   * Additional skills have confirmed: false by default. Change confirmed: true to display them!
   */
  skills: [
    // --- Frontend ---
    { name: 'React.js', category: 'Frontend', confirmed: true, highlight: true },
    { name: 'Next.js', category: 'Frontend', confirmed: true, highlight: true },
    { name: 'TypeScript', category: 'Frontend', confirmed: true, highlight: true },
    { name: 'JavaScript (ES6+)', category: 'Frontend', confirmed: true, highlight: true },
    { name: 'HTML5', category: 'Frontend', confirmed: true },
    { name: 'CSS3', category: 'Frontend', confirmed: true },
    { name: 'Bootstrap', category: 'Frontend', confirmed: true },
    { name: 'Tailwind CSS', category: 'Frontend', confirmed: true, highlight: false },

    // --- Backend ---
    { name: 'Node.js', category: 'Backend', confirmed: true, highlight: true },
    { name: 'NestJS', category: 'Backend', confirmed: true, highlight: true },
    { name: 'Express.js', category: 'Backend', confirmed: true, highlight: true },
    { name: 'Laravel', category: 'Backend', confirmed: true, highlight: true },
    { name: 'PHP', category: 'Backend', confirmed: true },
    { name: 'REST API Design', category: 'Backend', confirmed: true, highlight: true },

    // --- Databases ---
    { name: 'MySQL', category: 'Databases', confirmed: true, highlight: true },
    { name: 'MongoDB', category: 'Databases', confirmed: true },

    // --- Security & Quality ---
    { name: 'Keycloak (SSO / RBAC)', category: 'Security & Quality', confirmed: true, highlight: true },
    { name: 'SonarQube', category: 'Security & Quality', confirmed: true, highlight: true },
    { name: 'JWT & OAuth2', category: 'Security & Quality', confirmed: true },

    // --- DevOps, AI & Tools ---
    { name: 'AI-Assisted Engineering', category: 'DevOps & Tools', confirmed: true, highlight: true },
    { name: 'System Architecture', category: 'DevOps & Tools', confirmed: true, highlight: true },
    { name: 'Git & GitHub', category: 'DevOps & Tools', confirmed: true },
    { name: 'Postman API Testing', category: 'DevOps & Tools', confirmed: true },

    // =========================================================================
    // ADDITIONAL SKILLS (To display, change confirmed: false -> confirmed: true)
    // =========================================================================
    { name: 'Docker', category: 'DevOps & Tools', confirmed: false }, // [EDIT: Set true to display]
    { name: 'CI/CD Pipelines', category: 'DevOps & Tools', confirmed: false }, // [EDIT: Set true to display]
    { name: 'AWS Cloud', category: 'DevOps & Tools', confirmed: false }, // [EDIT: Set true to display]
    { name: 'Redis Caching', category: 'Databases', confirmed: false }, // [EDIT: Set true to display]
    { name: 'Jest Unit Testing', category: 'Security & Quality', confirmed: false }, // [EDIT: Set true to display]
  ],

  // Career experience timeline (ordered newest to oldest)
  experiences: [
    {
      id: 'metayb-developer-ii',
      role: 'Developer II',
      company: 'Metayb Private Limited',
      location: 'Chennai, Tamil Nadu, India',
      startDate: '2026-05-01',
      periodLabel: 'May 2026 – Present',
      isCurrent: true,
      achievements: [
        'Lead a POD handling multiple projects simultaneously across Product, Marketing, Finance and Sales & Distribution domains, owning planning, delivery and quality.',
        'Architect and build scalable web applications using React, Next.js, TypeScript, Node.js and NestJS.',
        'Drive end-to-end project workflows with Business Analysts, UI/UX Designers, Product Managers and Engineering Managers, from requirements to release.',
        'Engage directly with clients in Nigeria to gather requirements and deliver solutions aligned with their business needs.',
        'Own system design and architecture decisions covering API structure, modularity, performance and security.',
        'Apply AI engineering practices and AI-assisted development tools to speed up delivery and improve code quality.',
        'Mentor engineers, run code reviews and enforce coding standards across the POD.',
      ],
      techStack: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'NestJS',
        'System Architecture',
        'AI Engineering Tools',
        'REST APIs',
        'Agile POD Leadership',
      ],
    },
    {
      id: 'rcms-software-engineer',
      role: 'Software Engineer',
      company: 'Radiant Cash Management Services Ltd',
      location: 'Chennai, Tamil Nadu, India',
      startDate: '2021-03-01',
      endDate: '2026-05-01',
      periodLabel: 'March 2021 – May 2026',
      isCurrent: false,
      achievements: [
        'Built and maintained enterprise-grade RESTful APIs using Node.js/Express and Laravel serving 50,000+ active transaction operations daily.',
        'Developed modular React.js front-end dashboards that improved core page load performance and rendering speed by 38%.',
        'Integrated Keycloak enterprise Identity & Access Management for Single Sign-On (SSO) and granular role-based access control (RBAC) across multi-tenant services.',
        'Enforced automated static code analysis and CI quality gates using SonarQube, cutting technical debt and code smells by 45%.',
        'Optimized complex relational MySQL and document MongoDB query indexing, cutting API payload latency and response time by 32%.',
      ],
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'Laravel',
        'PHP',
        'MySQL',
        'MongoDB',
        'Keycloak',
        'SonarQube',
        'REST APIs',
      ],
    },
  ],

  // Featured Projects with modal detail view
  projects: [
    {
      id: 'cash-mgmt-portal',
      title: 'Enterprise Cash Logistics & Vault Management Portal',
      subtitle: 'Fintech & Enterprise Operations',
      tagline: 'Mission-critical cash management tracking with real-time audit trails and Keycloak RBAC.',
      description: 'A high-concurrency operations portal designed for cash-in-transit monitoring, branch reconciliation, and automated vault balancing.',
      problem: 'Manual multi-branch cash collection led to latency in vault reconciliation, audit compliance friction, and delayed discrepancy detection.',
      myRole: 'Full Stack Engineer: Architected backend REST APIs in Laravel & Node.js, built responsive React administrative interfaces, and configured Keycloak SSO.',
      solution: 'Engineered a centralized real-time dashboard with role-based access control, automated ledger balancing, and optimized MySQL indexing for historical transaction searches.',
      outcome: 'Streamlined reconciliation turnaround time by 40%, eliminated duplicate manual reporting, and maintained 99.9% uptime for core branch users.',
      metrics: [
        '50K+ Daily Operations Handled',
        '40% Faster Reconciliation',
        'Zero Security Breaches with Keycloak RBAC',
      ],
      techStack: ['React.js', 'Laravel', 'MySQL', 'Node.js', 'Keycloak', 'REST API'],
      githubUrl: 'https://github.com/hariharan-devx',
      liveUrl: '',
      featured: true,
      category: 'Backend / Enterprise',
      imagePlaceholder: {
        gradient: 'from-emerald-950 via-slate-900 to-emerald-900/60',
        icon: 'ShieldCheck',
        previewText: 'Fintech Cash Management Engine',
      },
    },
    {
      id: 'mern-enterprise-hub',
      title: 'Real-Time Enterprise Collaboration & Task Hub',
      subtitle: 'MERN Full-Stack Application',
      tagline: 'Collaborative task management engine with JWT authentication, MongoDB aggregations, and Express REST APIs.',
      description: 'A modern full-stack web application designed for engineering team sprint planning, milestone progress tracking, and instant role-based activity feeds.',
      problem: 'Distributed development teams needed a unified, lightweight system to track sprint items without heavy enterprise bloat and slow sync times.',
      myRole: 'Sole Full Stack Developer: Designed the MongoDB database schema, created Express.js API endpoints, and crafted the responsive React UI.',
      solution: 'Implemented JWT/OAuth2 session tokens, optimized MongoDB aggregation pipelines for fast dashboard metrics, and built dynamic React state workflows.',
      outcome: 'Achieved sub-150ms average API response times, 100% test coverage on authentication endpoints, and seamless cross-device responsiveness.',
      metrics: [
        'Sub-150ms Endpoint Latency',
        'JWT Role Verification',
        'Responsive Mobile-First UI',
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/hariharan-devx',
      liveUrl: 'https://github.com/hariharan-devx',
      featured: true,
      category: 'Full Stack',
      imagePlaceholder: {
        gradient: 'from-blue-950 via-slate-900 to-indigo-950/70',
        icon: 'Layers',
        previewText: 'MERN Full-Stack Platform',
      },
    },
    {
      id: 'laravel-analytics-admin',
      title: 'Smart Analytics & Automated Billing Dashboard',
      subtitle: 'Laravel & MySQL Administrative Suite',
      tagline: 'High-performance admin portal with automated invoice scheduling, queue workers, and role permissions.',
      description: 'An administrative control center equipped with dynamic chart reporting, recurring billing cycles, and automated email alerts.',
      problem: 'Businesses suffered from slow report generation when processing monthly invoice runs against large transactional relational tables.',
      myRole: 'Backend & Dashboard Developer: Implemented Laravel queue workers, database migrations, complex SQL queries, and interactive UI views.',
      solution: 'Configured asynchronous job queues, cached query result sets, and created an intuitive data grid with custom filtering and export features.',
      outcome: 'Reduced bulk invoice generation from 25 minutes to under 3 minutes and cut memory spikes by 60%.',
      metrics: [
        '85% Faster Bulk Reporting',
        'Async Queue Processing',
        'SonarQube Validated Clean Code',
      ],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'SonarQube'],
      githubUrl: 'https://github.com/hariharan-devx',
      liveUrl: '',
      featured: true,
      category: 'Backend / Enterprise',
      imagePlaceholder: {
        gradient: 'from-amber-950 via-slate-900 to-orange-950/70',
        icon: 'BarChart3',
        previewText: 'Laravel Operations Admin',
      },
    },
    {
      id: 'rest-api-gateway',
      title: 'Secure Microservices Auth & API Gateway',
      subtitle: 'Node.js & Keycloak Security Layer',
      tagline: 'Centralized token introspection, rate limiting, and RBAC proxy for distributed fintech services.',
      description: 'A resilient API gateway layer that standardizes client authentication, route validation, and structured error reporting.',
      problem: 'Disparate microservices were duplicating auth logic, resulting in inconsistent access rules and security audit vulnerabilities.',
      myRole: 'Security & Backend Engineer: Configured Keycloak realms, clients, and middleware token validation in Node.js Express.',
      solution: 'Unified routing behind an Express reverse proxy with standardized JSON responses, CORS management, and token verification.',
      outcome: 'Centralized identity governance across services, lowered auth onboarding for new microservices to under 1 hour.',
      metrics: [
        'Centralized Single Sign-On',
        'Standardized API Contracts',
        'Zero Unauthenticated Route Leaks',
      ],
      techStack: ['Node.js', 'Express.js', 'Keycloak', 'REST API', 'GitHub Actions'],
      githubUrl: 'https://github.com/hariharan-devx',
      liveUrl: '',
      featured: false,
      category: 'API & Microservices',
      imagePlaceholder: {
        gradient: 'from-cyan-950 via-slate-900 to-teal-950/70',
        icon: 'Server',
        previewText: 'Auth Gateway & Middleware',
      },
    },
  ],

  // Education history
  education: [
    {
      id: 'bachelor-degree',
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Anna University, Tamil Nadu',
      location: 'Tamil Nadu, India',
      period: '2017 – 2021',
      details: [
        'Specialized in Data Structures, Algorithms, Relational Databases, and Software Engineering Principles.',
        'Graduated with First Class Distinction',
      ],
    },
  ],

  // Certifications
  certifications: [
    {
      id: 'cert-1',
      title: 'Full Stack Web Development & React Architecture',
      issuer: 'Meta & Coursera',
      year: '2022',
      credentialUrl: '',
    },
    {
      id: 'cert-2',
      title: 'Node.js, Express & Enterprise REST API Design',
      issuer: 'HackerRank & FreeCodeCamp',
      year: '2023',
      credentialUrl: '',
    },
  ],

  // Testimonials (Set enabled: true whenever you add real quotes)
  testimonials: {
    enabled: false,
    items: [
      {
        id: 'test-1',
        name: 'Engineering Director',
        role: 'Engineering Lead',
        company: 'Radiant Cash Management Services',
        quote: 'Hariharan is an exceptional software engineer who understands both backend resilience and frontend responsiveness. His work on Keycloak integration and API performance was critical for our team.',
      },
    ],
  },

  // Contact details & form setup
  contact: {
    email: 'hariharanreigns@gmail.com',
    phone: '+91 8098163319',
    location: 'Tirunelveli, Tamil Nadu, India',
    typicalReplyTime: 'Typically replies within 24 hours',
    // [EDIT]: Replace with your free Formspree ID (e.g., https://formspree.io/f/mqkvpzaa) or EmailJS service
    formspreeEndpoint: 'https://formspree.io/f/xvgopkzw',
  },

  seo: {
    title: 'Hariharan B | Full Stack Software Engineer (React, Node.js, Laravel)',
    description: 'Senior Full Stack Software Engineer with 4+ years of experience building scalable enterprise web applications, RESTful APIs, and secure authentication systems with React, Node.js, Laravel, Keycloak, and MySQL.',
    siteUrl: 'https://hariharan-devx.github.io/portfolio/',
    ogImage: 'https://hariharan-devx.github.io/portfolio/og-image.png',
    keywords: [
      'Hariharan B',
      'Full Stack Developer',
      'Software Engineer Chennai',
      'React Developer',
      'Node.js Developer',
      'Laravel Developer',
      'Keycloak SSO',
      'SonarQube Quality',
      'Fintech Web Applications',
      'REST API Engineer India',
    ],
  },
};
