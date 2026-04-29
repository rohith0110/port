export const sectionLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "profile", label: "Profile" },
  { id: "contact", label: "Contact" },
];

export const researchInterests = [
  "Scalable backend architecture",
  "AI automation systems",
  "Audio intelligence and media processing",
  "Real-time event validation",
  "Low-connectivity product design",
  "Production reliability engineering",
];

export const projects = [
  {
    title: "Aeon Techfest Platform",
    duration: "Dec 2025 - Current",
    organization: "Aeon, Mahindra University",
    impact:
      "Built an event and smart-entry platform for 2000+ participants with secure, low-latency validation.",
    highlights: [
      "Implemented QR validation and OTP-backed access control with role-based permissions.",
      "Replaced manual gate verification with automated registration and entry workflows.",
    ],
    stack: ["Next.js", "RBAC", "OTP", "Real-time validation"],
    githubUrl: "https://github.com/rohith0110",
    liveUrl: "https://www.mu-aeon.com",
  },
  {
    title: "Ascoa Clean Earth App",
    duration: "Aug 2025 - Current",
    organization: "Ascoa, Cameroon",
    impact:
      "Architected a modular mobile app for field reporting with resilient performance in low-connectivity environments.",
    highlights: [
      "Designed geospatial reporting and analytics aggregation on a Firebase data layer.",
      "Built offline-first caching with secure auth and map-based issue visualization.",
    ],
    stack: ["Flutter", "GetX", "Firebase", "Firestore"],
    githubUrl: "https://github.com/rohith0110",
    liveUrl: null,
  },
  {
    title: "AI-DJ Continuous Stream",
    duration: "Mar 2025 - May 2025",
    organization: "Aeon, Mahindra University",
    impact:
      "Delivered a production-ready AI DJ backend that continuously converts voted tracks into seamless live mixes.",
    highlights: [
      "Built a thread-safe Flask plus Gunicorn service with rate-limited APIs and caching.",
      "Orchestrated modular audio processing using yt-dlp, Spleeter, librosa, and pydub.",
    ],
    stack: ["Flask", "Gunicorn", "librosa", "Spleeter"],
    githubUrl: "https://github.com/rohith0110",
    liveUrl: null,
  },
];

export const capabilityTracks = [
  {
    title: "Build",
    items:
      "React, Next.js, Flutter, Node.js, Flask, REST APIs, Firebase, Clerk Auth",
  },
  {
    title: "Engineer",
    items:
      "System design, RBAC, OTP systems, caching, low-latency validation, production debugging",
  },
  {
    title: "Analyze",
    items:
      "SQL, Firestore, Supabase, ANN, CNN, image recognition, media processing pipelines",
  },
];

export const responsibilityRoles = [
  {
    title: "Event Coordinator",
    organization: "AEON Techfest, Mahindra University",
    summary:
      "Led deployment of the QR-based smart entry and validation system for 2000+ participants.",
  },
  {
    title: "Finance Team Member",
    organization: "Aeforia - The sustainability club, Mahindra University",
    summary:
      "Managed budgeting and financial coordination for inter-college events.",
  },
  {
    title: "Events Coordinator",
    organization: "MARC, Mahindra Alumni Relations Center",
    summary:
      "Coordinated cross-functional teams and operational execution of technical events.",
  },
];

export const experienceSidebars = [
  {
    title: "Social Service",
    items: [
      "Supported NGO marketing campaigns through video production and outreach strategy",
      "Participated in COVID food and donation drives",
      "Conducted 3D modelling workshops for 70+ students",
      "Built a smart-farm IoT solution for rural farmers",
    ],
  },
];

export const profileFacts = [
  "B.Tech Computer Science Engineering at Mahindra University (2023 - Present)",
  "Merit Scholarship recipient, Mahindra University (2nd year)",
  "Top scorer recognition, Hyderabad Public School (Class 12)",
  "2nd place, Intra School Website Development Competition",
];
