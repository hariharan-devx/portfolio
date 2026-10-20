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
    role: 'Full Stack Software Engineer',
    // Rotating role lines for the Hero section
    typedRoles: [
      'Full Stack Software Engineer',
      'React.js & Frontend Architect',
      'Node.js & Express Specialist',
      'Laravel & PHP Backend Engineer',
      'Scalable REST API Designer',
    ],
    // High-impact recruiter-facing value pitch
    tagline: 'I build secure, scalable web apps and high-throughput REST APIs for fintech and enterprise teams with clean architecture and production rigor.',
    // Professional story for the About section (clean code, security, performance)
    story: [
      "I am a Full Stack Software Engineer with deep hands-on expertise building enterprise-grade web applications, secure authentication pipelines, and distributed APIs.",
      "At Radiant Cash Management Services Ltd, I lead and collaborate on mission-critical financial software systems where uptime, transaction integrity, and sub-second latency are paramount.",
      "My engineering philosophy centers on clean architecture, strict security standards (SSO, RBAC, OAuth2/JWT), continuous code quality with SonarQube, and database query optimization.",
      "I am currently looking for high-impact engineering opportunities where I can solve complex architectural challenges and scale robust modern applications.",
    ],
    location: 'Tirunelveli, Tamil Nadu, India',
    relocationNote: '[EDIT: Open to Remote, Hybrid, & Relocation to Chennai / Bangalore / Hyderabad]',
    openToWork: true,
    availabilityStatus: 'Available for high-impact engineering opportunities',
    // Resume file path in the public folder
    resumeUrl: './Hariharan_B_Resume.pdf',
    // Start date of professional career (March 2021) for automatic experience calculation
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
    { name: 'JavaScript (ES6+)', category: 'Frontend', confirmed: true, highlight: true },
    { name: 'HTML5', category: 'Frontend', confirmed: true },
    { name: 'CSS3', category: 'Frontend', confirmed: true },
    { name: 'Bootstrap', category: 'Frontend', confirmed: true },

    // --- Backend ---
    { name: 'Node.js', category: 'Backend', confirmed: true, highlight: true },
    { name: 'Express.js', category: 'Backend', confirmed: true, highlight: true },
    { name: 'PHP', category: 'Backend', confirmed: true },
    { name: 'Laravel', category: 'Backend', confirmed: true, highlight: true },

    // --- Databases ---
    { name: 'MySQL', category: 'Databases', confirmed: true, highlight: true },
    { name: 'MongoDB', category: 'Databases', confirmed: true },

    // --- Security & Quality ---
    { name: 'Keycloak (SSO / RBAC)', category: 'Security & Quality', confirmed: true, highlight: true },
    { name: 'SonarQube', category: 'Security & Quality', confirmed: true, highlight: true },

    // --- DevOps & Tools ---
    { name: 'Git & GitHub', category: 'DevOps & Tools', confirmed: true },

    // =========================================================================
    // ADDITIONAL SKILLS (To display, change confirmed: false -> confirmed: true)
    // =========================================================================
    { name: 'TypeScript', category: 'Frontend', confirmed: true, highlight: false }, // Set confirmed: false if not ready
    { name: 'Next.js', category: 'Frontend', confirmed: false }, // [EDIT: Set true to display]
    { name: 'Tailwind CSS', category: 'Frontend', confirmed: true, highlight: false },
    { name: 'REST API Design', category: 'Backend', confirmed: true, highlight: true },
    { name: 'JWT & OAuth2', category: 'Security & Quality', confirmed: true },
    { name: 'Docker', category: 'DevOps & Tools', confirmed: false }, // [EDIT: Set true to display]
    { name: 'CI/CD Pipelines', category: 'DevOps & Tools', confirmed: false }, // [EDIT: Set true to display]
    { name: 'AWS Cloud', category: 'DevOps & Tools', confirmed: false }, // [EDIT: Set true to display]
    { name: 'Redis Caching', category: 'Databases', confirmed: false }, // [EDIT: Set true to display]
    { name: 'Jest Unit Testing', category: 'Security & Quality', confirmed: false }, // [EDIT: Set true to display]
    { name: 'Postman API Testing', category: 'DevOps & Tools', confirmed: true },
  ],

  // Career experience timeline
  experiences: [
    {
      id: 'rcms-software-engineer',
      role: 'Software Engineer',
      company: 'Radiant Cash Management Services Ltd',
      location: 'Chennai, Tamil Nadu, India',
      startDate: '2021-03-01',
      isCurrent: true,
      achievements: [
        'Built and maintained enterprise-grade RESTful APIs using Node.js/Express and Laravel serving [EDIT: 50,000+] active transaction operations daily.',
        'Developed modular React.js front-end dashboards that improved core page load performance and rendering speed by [EDIT: 38%].',
        'Integrated Keycloak enterprise Identity & Access Management for Single Sign-On (SSO) and granular role-based access control (RBAC) across multi-tenant services.',
        'Enforced automated static code analysis and CI quality gates using SonarQube, cutting technical debt and code smells by [EDIT: 45%].',
        'Optimized complex relational MySQL and document MongoDB query indexing, cutting API payload latency and response time by [EDIT: 32%].',
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
      outcome: 'Streamlined reconciliation turnaround time by [EDIT: 40%], eliminated duplicate manual reporting, and maintained 99.9% uptime for core branch users.',
      metrics: [
        '[EDIT: 50K+] Daily Operations Handled',
        '[EDIT: 40%] Faster Reconciliation',
        'Zero Security Breaches with Keycloak RBAC',
      ],
      techStack: ['React.js', 'Laravel', 'MySQL', 'Node.js', 'Keycloak', 'REST API'],
      githubUrl: 'https://github.com/hariharan-devx', // [EDIT: Replace with specific repository link if public]
      liveUrl: '', // [EDIT: Add live demo URL or leave empty to disable button]
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
      title: 'Real-Time Enterprise Collaboration & Task Hub [EDIT ME]',
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
      githubUrl: 'https://github.com/hariharan-devx', // [EDIT: Replace with your GitHub project link]
      liveUrl: 'https://github.com/hariharan-devx', // [EDIT: Replace with live deployment link]
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
      title: 'Smart Analytics & Automated Billing Dashboard [EDIT ME]',
      subtitle: 'Laravel & MySQL Administrative Suite',
      tagline: 'High-performance admin portal with automated invoice scheduling, queue workers, and role permissions.',
      description: 'An administrative control center equipped with dynamic chart reporting, recurring billing cycles, and automated email alerts.',
      problem: 'Businesses suffered from slow report generation when processing monthly invoice runs against large transactional relational tables.',
      myRole: 'Backend & Dashboard Developer: Implemented Laravel queue workers, database migrations, complex SQL queries, and interactive UI views.',
      solution: 'Configured asynchronous job queues, cached query result sets, and created an intuitive data grid with custom filtering and export features.',
      outcome: 'Reduced bulk invoice generation from 25 minutes to under 3 minutes and cut memory spikes by [EDIT: 60%].',
      metrics: [
        '[EDIT: 85%] Faster Bulk Reporting',
        'Async Queue Processing',
        'SonarQube Validated Clean Code',
      ],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'SonarQube'],
      githubUrl: 'https://github.com/hariharan-devx', // [EDIT: Replace with your GitHub project link]
      liveUrl: '', // [EDIT: Add live preview URL if available]
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
      title: 'Secure Microservices Auth & API Gateway [EDIT ME]',
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
      githubUrl: 'https://github.com/hariharan-devx', // [EDIT: Replace with your GitHub link]
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
      degree: 'Bachelor of Engineering / Science [EDIT: Degree Name, e.g. B.E. Computer Science]',
      institution: '[EDIT: College / University Name, Tamil Nadu]',
      location: 'Tamil Nadu, India',
      period: '[EDIT: 2017 – 2021]',
      details: [
        'Specialized in Data Structures, Algorithms, Relational Databases, and Software Engineering Principles.',
        '[EDIT: Graduated with First Class Distinction / CGPA: X.X]',
      ],
    },
  ],

  // Certifications
  certifications: [
    {
      id: 'cert-1',
      title: '[EDIT: Full Stack Web Development / React Certification]',
      issuer: '[EDIT: Coursera / Udemy / HackerRank / Meta]',
      year: '[EDIT: 2022]',
      credentialUrl: '',
    },
    {
      id: 'cert-2',
      title: '[EDIT: Node.js & REST API Design / Laravel Specialist]',
      issuer: '[EDIT: FreeCodeCamp / LinkedIn Learning / Pluralsight]',
      year: '[EDIT: 2023]',
      credentialUrl: '',
    },
  ],

  // Testimonials (Set enabled: true whenever you add real quotes)
  testimonials: {
    enabled: false, // [EDIT: Set to true once you have real colleague / client reviews]
    items: [
      {
        id: 'test-1',
        name: '[EDIT: Manager / Colleague Name]',
        role: 'Engineering Manager',
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
