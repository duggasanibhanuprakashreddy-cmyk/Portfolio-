export const personalInfo = {
  name: 'Duggasani Bhanuprakash Reddy',
  firstName: 'Bhanuprakash',
  role: 'AI & Data Science Engineer in Training',
  headline: 'B.Tech AI & Data Science Student at REVA University',
  university: 'REVA University, Bengaluru',
  education: 'B.Tech in Computer Science & Engineering (AI & Data Science)',
  duration: 'September 2025 – February 2029',
  cgpa: '8.85 CGPA',
  location: 'Bengaluru, Karnataka, India',
  email: 'duggasanibhanuprakashreddy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/duggasanibhanuprakashreddy/',
  github: 'https://github.com/duggasanibhanuprakashreddy-cmyk',
  portfolio: 'https://myportfolio-website-delta.vercel.app',
  resumeUrl: '/Bhanuprakash_Resume.txt',
  tagline: 'Architecting intelligent pipelines, data models, and scalable systems using Python, Machine Learning, and Modern Web.',
  bio: 'Passionate Artificial Intelligence & Data Science undergraduate at REVA University. Driven by algorithmic problem solving, statistical modeling, machine learning fundamentals, and building responsive, full-stack data applications that transform raw complexity into intuitive digital solutions.',
};

export const marqueeItems = [
  'DUGGASANI BHANUPRAKASH REDDY',
  'B.TECH CSE (AI & DATA SCIENCE)',
  'MACHINE LEARNING & DEEP LEARNING',
  'PYTHON & ADVANCED SQL',
  'REVA UNIVERSITY • BENGALURU',
  'DATA STRUCTURES & ALGORITHMS',
  'IOT & EMBEDDED SYSTEMS',
  'PREDICTIVE ANALYTICS',
];

export const quickStats = [
  { value: 'B.Tech CSE', label: 'AI & DATA SCIENCE' },
  { value: '3+', label: 'FLAGSHIP PROJECTS' },
  { value: '15+', label: 'CORE TECH SKILLS' },
  { value: 'REVA', label: 'BENGALURU, INDIA' },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const mindsetCards = [
  {
    icon: 'Brain',
    title: 'AI & Algorithmic Mindset',
    description: 'Exploring machine learning algorithms, model training pipelines, and data-driven problem solving with mathematical rigor.',
  },
  {
    icon: 'Terminal',
    title: 'Practical Software Builder',
    description: 'Crafting robust Python scripts, modern web interfaces, interactive dashboards, and API workflows.',
  },
  {
    icon: 'Cpu',
    title: 'Hardware & IoT Integration',
    description: 'Bridging the physical and digital with embedded microcontrollers, Bluetooth protocols, and sensor telemetry.',
  },
];

export const skillGroups = [
  {
    id: '01',
    tag: '01 // PRIORITY',
    title: 'Python & Core Fundamentals',
    icon: 'Code2',
    accent: 'cyan',
    description: 'Strong foundations in modern Python, object-oriented programming, and algorithmic efficiency.',
    skills: [
      { name: 'Python (OOP, Concurrency, PyData)', level: 92 },
      { name: 'Data Structures & Algorithms (DSA)', level: 85 },
      { name: 'SQL & Relational Databases (PostgreSQL/MySQL)', level: 88 },
      { name: 'Git & GitHub Version Control', level: 90 },
    ],
  },
  {
    id: '02',
    tag: '02 // PRIORITY',
    title: 'Data Science & Machine Learning',
    icon: 'Brain',
    accent: 'violet',
    description: 'Exploratory data analysis, statistical modeling, feature engineering, and model evaluation.',
    skills: [
      { name: 'Data Analysis & Wrangling (Pandas/NumPy)', level: 90 },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 86 },
      { name: 'Machine Learning Pipelines (Scikit-Learn)', level: 80 },
      { name: 'Exploratory Data Analysis (EDA)', level: 88 },
    ],
  },
  {
    id: '03',
    tag: '03 // PRIORITY',
    title: 'IoT & Embedded Systems',
    icon: 'Cpu',
    accent: 'sky',
    description: 'Interfacing sensors, microcontroller firmware, and wireless protocols for smart automation.',
    skills: [
      { name: 'Internet of Things (IoT) Protocols', level: 78 },
      { name: 'Embedded Systems & Microcontrollers', level: 75 },
      { name: 'Bluetooth & Wireless Telemetry', level: 74 },
      { name: 'Hardware Sensor Interfacing', level: 80 },
    ],
  },
  {
    id: '04',
    tag: '04 // PRIORITY',
    title: 'Web Technologies & Tooling',
    icon: 'Globe',
    accent: 'emerald',
    description: 'Full-stack fundamentals, modern JavaScript/React, and deployment platforms.',
    skills: [
      { name: 'React 19 & Vite Development', level: 85 },
      { name: 'Tailwind CSS & 3D Interactive UI', level: 88 },
      { name: 'REST APIs & Web Architecture', level: 82 },
      { name: 'Vercel & Cloud Deployment', level: 86 },
    ],
  },
];

export const projects = [
  {
    id: 'data-dashboard',
    title: 'Smart Predictive Data Analytics Dashboard',
    tag: 'AI & ANALYTICS // 01',
    description:
      'An end-to-end analytics platform engineered to ingest heterogeneous datasets, perform automated statistical cleaning, compute trend indicators, and render interactive multi-dimensional data visualizations.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'React', 'Tailwind CSS'],
    coreFeatures: [
      'Automated outlier and null value cleansing pipeline',
      'Dynamic correlation matrices and trend decomposition',
      'High-throughput SQL query execution for large schemas',
      'Interactive drill-down charts with instant export',
    ],
    technicalTakeaways: [
      'Engineered vector-based data transformation routines reducing latency by 40%',
      'Designed a responsive modular UI for live metric inspections',
      'Implemented clean schema parsing for tabular data formats',
    ],
    github: 'https://github.com/duggasanibhanuprakashreddy-cmyk/Portfolio-',
    demo: 'https://myportfolio-website-delta.vercel.app',
  },
  {
    id: 'iot-sensor-app',
    title: 'IoT Sensor Telemetry & Edge Monitoring App',
    tag: 'HARDWARE & SYSTEMS // 02',
    description:
      'A real-time telemetry tracking application designed to communicate with distributed IoT nodes over Bluetooth and Wi-Fi, streaming live sensor readings and flagging environmental anomalies.',
    technologies: ['IoT', 'Python', 'Embedded Systems', 'Bluetooth', 'WebSockets'],
    coreFeatures: [
      'Real-time bi-directional telemetry over Bluetooth protocols',
      'Instant threshold anomaly detection and emergency alerts',
      'Low-power sensor polling optimization routines',
      'Live timeline stream of device health metrics',
    ],
    technicalTakeaways: [
      'Mastered asynchronous serial and socket packet parsing',
      'Built fault-tolerant retry handlers for edge disconnection',
      'Structured low-overhead data buffers for high-frequency samples',
    ],
    github: 'https://github.com/duggasanibhanuprakashreddy-cmyk/Portfolio-',
    demo: 'https://myportfolio-website-delta.vercel.app',
  },
  {
    id: 'ml-prediction-starter',
    title: 'Machine Learning Classification & Inference Engine',
    tag: 'MACHINE LEARNING // 03',
    description:
      'A production-ready machine learning starter framework featuring automated feature scaling, cross-validation scoring, hyperparameter exploration, and model persistence for classification and regression tasks.',
    technologies: ['Python', 'Scikit-Learn', 'EDA', 'NumPy', 'Jupyter'],
    coreFeatures: [
      'Automated EDA reports with statistical significance checks',
      'Ensemble model comparison (Random Forest, SVM, Gradient Boosting)',
      'Model serialization and standalone inference API endpoint',
      'ROC-AUC curve generation and confusion matrix breakdowns',
    ],
    technicalTakeaways: [
      'Prevented data leakage using strict training/validation pipeline abstractions',
      'Implemented custom evaluation metrics for imbalanced datasets',
      'Containerized inference workflow for quick web deployment',
    ],
    github: 'https://github.com/duggasanibhanuprakashreddy-cmyk/Portfolio-',
    demo: 'https://myportfolio-website-delta.vercel.app',
  },
];

export const journeyTimeline = [
  {
    phase: 'Current Phase',
    badge: 'IN ACTIVE FOCUS',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'REVA University, Bengaluru',
    period: '2025 – 2029',
    description:
      'Focusing on advanced Data Structures & Algorithms, mathematical foundations of machine learning, linear algebra, relational databases, and hands-on system building.',
    highlights: ['Specialization in AI & Data Science', 'Algorithms & Problem Solving in Python & C++', 'Database Architectures & Query Tuning'],
    accent: 'cyan',
  },
  {
    phase: 'Building Phase',
    badge: 'PROJECTS & PROTOTYPES',
    title: 'Autonomous System & Data Engineering Prototypes',
    institution: 'Independent Research & Collaborative Projects',
    period: '2025 – Present',
    description:
      'Constructed analytical dashboards, implemented predictive modeling algorithms, and integrated embedded sensor nodes for real-time edge telemetry.',
    highlights: ['Predictive Analytics Dashboard', 'IoT Sensor Monitoring System', 'Machine Learning Classification Pipeline'],
    accent: 'violet',
  },
  {
    phase: 'Upcoming Horizon',
    badge: 'NEXT HORIZON',
    title: 'AI Engineering & Data Science Industry Integration',
    institution: 'Internships, Research & Production Engineering',
    period: 'Future Focus',
    description:
      'Targeting high-impact engineering internships to deploy scalable machine learning architectures, optimize inference latencies, and solve high-stakes analytical challenges.',
    highlights: ['Production ML Deployment', 'Big Data Engineering', 'End-to-End AI Products'],
    accent: 'emerald',
  },
];

export const certifications = [
  {
    title: 'Data Analysis with Python',
    issuer: 'Python / Data Science Professional Track',
    badge: 'VERIFIED ENGAGEMENT ✓',
    date: 'Certified',
    description: 'Comprehensive coverage of Pandas, NumPy, statistical hypothesis testing, and exploratory data manipulation.',
    link: '#',
  },
  {
    title: 'Data Visualization with Python',
    issuer: 'Python / Data Science Professional Track',
    badge: 'VERIFIED ENGAGEMENT ✓',
    date: 'Certified',
    description: 'Mastery in communicating insights through custom Matplotlib, Seaborn, and interactive graphical dashboards.',
    link: '#',
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'Python / Data Science Learning Track',
    badge: 'VERIFIED ENGAGEMENT ✓',
    date: 'Certified',
    description: 'Algorithmic fundamentals, memory structures, OOP principles, and data manipulation workflows.',
    link: '#',
  },
  {
    title: 'Ignite Full Technical Program',
    issuer: 'Ignite Advanced Program',
    badge: 'VERIFIED ENGAGEMENT ✓',
    date: 'Certified',
    description: 'Collaborative development, engineering best practices, agile problem solving, and system design.',
    link: '#',
  },
];

export const terminalCommands = {
  whoami: {
    output: [
      'Name       : Duggasani Bhanuprakash Reddy',
      'Role       : B.Tech AI & Data Science Student',
      'College    : REVA University, Bengaluru',
      'Focus      : Machine Learning, Python, Analytics, IoT Systems',
      'Status     : Actively building, learning, and open to internships',
    ],
  },
  focus: {
    output: [
      'PRIMARY SPECIALIZATION:',
      '• Artificial Intelligence & Machine Learning',
      '• Data Analysis, EDA & Statistical Modeling',
      '• Python, SQL, DSA & Algorithmic Problem Solving',
      '• IoT Systems, Microcontrollers & Bluetooth Telemetry',
      '• Modern Web UI with React & Tailwind CSS',
    ],
  },
  skills: {
    output: [
      '[Languages]   : Python, SQL, C++, JavaScript (ES6+)',
      '[AI / Data]   : Pandas, NumPy, Matplotlib, Scikit-Learn, EDA',
      '[Hardware]    : IoT Protocols, Microcontrollers, Bluetooth, Sensors',
      '[Web / Tools] : React, Vite, Tailwind CSS, Git, GitHub, Linux, Vercel',
    ],
  },
  projects: {
    output: [
      '01. Smart Predictive Data Analytics Dashboard (Python / SQL / React)',
      '02. IoT Sensor Telemetry & Edge Monitoring App (IoT / Python / Bluetooth)',
      '03. Machine Learning Classification Engine (Scikit-Learn / EDA / NumPy)',
      'Type \'help\' or click quick buttons for more commands.',
    ],
  },
  status: {
    output: [
      'STATUS: Online & Active 🚀',
      '• Enrolled in B.Tech CSE (AI & Data Science) at REVA University',
      '• Open for Summer/Winter AI & Data Science Internship Opportunities',
      '• Actively solving Data Structures & Algorithms challenges',
    ],
  },
  contact: {
    output: [
      'Email    : duggasanibhanuprakashreddy@gmail.com',
      'LinkedIn : linkedin.com/in/duggasanibhanuprakashreddy',
      'GitHub   : github.com/duggasanibhanuprakashreddy-cmyk',
      'Location : Bengaluru, Karnataka, India',
    ],
  },
};
