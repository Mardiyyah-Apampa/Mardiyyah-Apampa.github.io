// ─────────────────────────────────────────────────────────────
//  Your personal details live here. Edit this one file to update
//  the About, Resume and Contact pages plus the taskbar links.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Mardiyyah Apampa',
  tagline: 'Exploring AI, robotics & software engineering',
  status: 'Open to opportunities',
  email: 'apampamardiyyah@gmail.com',
  location: 'Lagos, Nigeria',
  links: {
    github: 'https://github.com/Mardiyyah-Apampa',
    linkedin: 'https://www.linkedin.com/in/mardiyyah-apampa-854570298/',
  },
  resumePdf: '/Mardiyyah_Apampa_Resume.pdf',

  // Contact form: create a free form at https://formspree.io and paste its ID
  // here (the part after /f/ in the endpoint, e.g. 'xyzabcde').
  // While this is empty, the form opens the visitor's email app instead.
  formspreeId: '',
};

export const profile = {
  headline: 'The human behind the code',
  intro:
    'Computer Science graduate exploring intelligent systems, with hands-on experience in full-stack development, data analysis and database management.',
  bio: [
    'I build user-focused applications and enjoy working across the stack, from PHP and Node.js back ends to responsive interfaces.',
    'I visualise data with Power BI and work with relational and NoSQL databases such as MySQL and MongoDB.',
    'My academic and practical interests sit where software meets the physical world: Software Engineering, Artificial Intelligence, Robotics and Human–Computer Interaction.',
  ],
  interests: ['Software Engineering', 'AI', 'Robotics', 'HCI'],
  // Edit this list whenever you pick up something new.
  currentlyLearning: ['Rust', 'Deep learning'],
};

export const education = [
  {
    school: 'Pan-Atlantic University',
    degree: 'BSc. Computer Science',
    dates: '10/2022 – 07/2026',
    location: 'Lagos, Nigeria',
    details: 'CGPA: 4.55 / 5.0',
    coursework: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Data Management', 'HCI'],
  },
];

export const experience = [
  {
    role: 'Software Development Intern',
    company: 'triBBBal LLC',
    dates: '07/2025 – 09/2025',
    points: [
      'Developed a full-stack PHP-based social networking platform with authentication, user profiles, post feeds, search and dynamic content, using a custom MVC-like architecture.',
      'Built real-time communication and community features with AJAX and Node.js WebSockets, including chat, forums, notifications and file uploads.',
      'Designed and managed MySQL databases and an administrative dashboard, with a responsive, cohesive interface and scalable project structure.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Pay Vantage Limited',
    dates: '07/2024 – 09/2024',
    points: [
      'Gathered and processed large data sets with SQL and Power BI for financial performance analysis of transaction volumes and revenue.',
      'Developed interactive Power BI dashboards and reports that simplified complex data for senior management.',
      'Assisted with backend development, learning some Java and Spring Boot to understand fintech data processing.',
    ],
  },
];

export const leadership = [
  {
    role: 'Event Co-ordinator & Welfare Officer',
    org: 'PAU Muslim Committee',
    dates: '04/2024 – 04/2025',
    points: [
      'Co-ordinated community events in line with Islamic principles.',
      'Organised a welcome event introducing newcomers to PAU.',
      'Looked after the welfare of members.',
    ],
  },
];

export const volunteering = [
  { role: 'Peer-2-Peer Tutor', org: 'Pan-Atlantic University', dates: '11/2024 – Present' },
  { role: 'Ushering & Registration Volunteer', org: 'TEDxPAU', dates: '09/2024 – 11/2024' },
];

export const skills = {
  technical: ['Python', 'C++', 'C#', 'Rust', 'PHP', 'React', 'HTML', 'CSS', 'Unity', 'Power BI', 'MySQL', 'PostgreSQL', 'MongoDB'],
  soft: ['Team coordination', 'Conflict resolution', 'Leadership', 'Decision-making under pressure', 'Strategic planning'],
  languages: ['English (fluent)', 'Yoruba (fluent)'],
};
