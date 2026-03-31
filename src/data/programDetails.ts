export type ProgramTuition = {
  year1?: string;
  year2?: string;
  year3?: string;
};

export type ProgramFees = {
  emgs: string;
  registrationInternational: string;
  additionalFees: string;
  tuition: ProgramTuition;
  total: string;
};

export type ProgramDetails = {
  code?: string;
  overview?: string;
  studyMode?: string;
  durationOfStudy?: string;
  duration?: string;
  intakes?: string[];
  careers?: string[];
  fees?: ProgramFees;
};

// Key = slugify(program.name)
export const programDetailsMap: Record<string, ProgramDetails> = {
  /* =========================
     FOUNDATION PROGRAMS
     ========================= */

  "foundation-in-business": {
    code: "N/340/3/0805 (FA15158) 01/27",
    overview:
      "A foundation course is a programme that will prepare you for an undergraduate degree at university. Studying a foundation course will help you attain the correct level of qualifications and skills to pursue a degree at university. A foundation year is usually available as a three-term programme which is made up of academic modules and specific modules related to your chosen subject.",
    studyMode: "Full Time",
    durationOfStudy: "1 Year / 1.5 Years",
    duration: "NA",
    intakes: ["January", "May", "September"],
    careers: [
      "International Marketing Managers",
      "Marketing Specialists",
      "Business Analysts",
      "Advertising Executives",
      "Media Planners",
      "Forensic Accountants",
      "Financial Planners",
      "Credit Risk Analysts",
      "Global Distribution Managers",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 700",
      tuition: { year1: "RM 14,000" },
      total: "RM 20,700",
    },
  },

  "foundation-in-arts-design": {
    code: "N/210/3/0043 (FA15205) 01/27",
    overview:
      "A foundation course is a programme that will prepare you for an undergraduate degree at university. Studying a foundation course will help you attain the correct level of qualifications and skills to pursue a degree at university. A foundation year is usually available as a three-term programme which is made up of academic modules and specific modules related to your chosen subject.",
    studyMode: "Full Time",
    durationOfStudy: "1 Year / 1.5 Years",
    duration: "NA",
    intakes: ["January", "May", "September"],
    careers: [
      "Interior Designer",
      "Architectural Assistant",
      "CAD Designer",
      "Exhibition Designer",
      "Interior Quantity Executive",
      "Furniture Designer",
      "Freelance Designer",
      "Perspective Illustrator",
      "Assistant Project Manager",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 700",
      tuition: { year1: "RM 14,000" },
      total: "RM 20,700",
    },
  },

  /* =========================
     DIPLOMA PROGRAMS
     ========================= */

  "diploma-in-accountancy": {
    code: "R/344/4/0486 (FA8465) 02/27",
    overview:
      "Diploma of Accountancy is designed to teach the students about the essentials of accounting. Students will learn how to record all financial transactions, financial information in report and analysis and etc. Study Accountancy is very important because everything in our life, especially business is involved with finance. In many ways, accounting is the backbone of business. Its role is to track a company's finances in their numerous forms, from credits, debits, and profitability to payroll and tax filing.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    duration: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Childcare Centre Manager",
      "Children's Event Organiser",
      "Education Administrator",
      "Early Childhood Coordinator",
      "Preschool Teacher",
      "School Counselor",
      "Assistant Principal",
      "Principal Kindergarten Owner",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 10,500", year2: "RM 9,500", year3: "RM 9,500" },
      total: "RM 36,500",
    },
  },

  "diploma-in-business-administration": {
    code: "R/340/4/0654 ( FA8031) 01/26",
    overview:
      "The world is the arena for business, and it is for you to excel. Here at ALFA University College, we will teach you about the best business opportunity, economy, finance, market segmentation, analyzing core factors, and how to increase business efficiency. We will equip you with business skills, communication, leadership, and multiple disciplines for the real world of business. If you wish to be a rich and famous business tycoon of the modern age, join us now!",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    duration: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Office Administrator",
      "Business Planner",
      "Coordinator",
      "Personal Assistant",
      "Operations Executive",
      "HR Executive",
      "Credit Analyst",
      "Sales and Marketing Executive",
      "Business Dev. Executive",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 10,500", year2: "RM 9,500", year3: "RM 9,500" },
      total: "RM 36,500",
    },
  },

  "diploma-in-e-business": {
    code: "N/340/4/0801 (PA 14322) 04/26",
    overview:
      "The world is the arena for business, and it is for you to excel. Here at ALFA University College, we will teach you the fundamentals of e-business, how to commercialize your product, ways to increase the unbounded numbers of sales, techniques to optimize the technologies, and steps to expand the business. We will equip you with business skills, communication, leadership, and multiple disciplines for the real world of business.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    duration: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "E-Business coordinator",
      "E-Business analyst",
      "E-Marketing associate",
      "Assistant project manager",
      "Assistant web developer",
      "Digital Marketer",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 10,500", year2: "RM 9,500", year3: "RM 9,500" },
      total: "RM 36,500",
    },
  },

  "diploma-in-information-technology": {
    code: "R/0611/4/0122 (PA 13793) 10/30",
    overview:
      "The 21st century is a reign of technology. Millennial are way far too familiar with gadgets and computers. Here at ALFA University College, we want you to explore more than what you know, extensive than what you understand about technology. We are molding you to become a computer network architect, a computer programmer, a computer systems analyst, a database administrator, an information security analyst, an information architect, a web developer, and so much more.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    duration: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Software Engineer",
      "Software Tester (Quality Assurance)",
      "Application Developer",
      "Web Developer & Designer",
      "Database Administrator",
      "System Analyst",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 11,500", year2: "RM 10,500", year3: "RM 10,500" },
      total: "RM 39,500",
    },
  },

  "diploma-in-early-childhood-education": {
    code: "R2/0112/4/0098 (A9699) 07/27",
    overview:
      "We paint the white canvas with colors. We show them the brilliant way to hold the future, and we are the reason for them to grow excellent. It is a real opportunity to make a difference in young lives and also influence future generations. We will ensure that children get off to a good start in their lives and their learning. ALFA University College offers an outstanding module for teaching and learning activities in preparation for nursery and pre-school.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    duration: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Childcare Centre Manager",
      "Children's Event Organiser",
      "Education Administrator",
      "Early Childhood Coordinator",
      "Preschool Teacher",
      "School Counselor",
      "Assistant Principal",
      "Principal Kindergarten Owner",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 10,500", year2: "RM 9,500", year3: "RM 9,500" },
      total: "RM 36,500",
    },
  },

  "diploma-in-early-childhood-education-odl": {
    code: "R-DL/0112/4/0102 ( PA 10020) 01/30",
    overview:
      "We paint the white canvas with colors. We show them the brilliant way to hold the future, and we are the reason for them to grow excellent. It is a real opportunity to make a difference in young lives and also influence future generations. ALFA University College offers an outstanding module for teaching and learning activities in preparation for nursery and pre-school via Open Distance Learning.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Early childhood teachers",
      "Early childhood coordinator",
      "Kindergarten principal and assistant principal",
      "Child care manager",
      "Pre-school management consultancy",
      "Education administrator",
      "Special education teacher",
      "Children's event organizer",
      "School counselor and guidance officer",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 10,500", year2: "RM 9,500", year3: "RM 9,500" },
      total: "RM 36,500",
    },
  },

  "diploma-in-graphic-design": {
    code: "R3/0211/4/0163 (A5775) 05/30",
    overview:
      "The magnificent graphic presentation came from an outstanding person who was able to join creativity and passion. If you are into creating visual concepts, love to venture into new ideas, focus on branding, logos, and websites, this course is for you. ALFA University College will ensure your time here spends well with lots of hands-on activities with the technology.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Graphic Designer",
      "Art Director",
      "Publication Designer",
      "Creative Director",
      "Illustrator",
      "Freelance Designer",
      "Package Designer",
      "Production Manager",
      "DTP Artist",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 11,500", year2: "RM 10,500", year3: "RM 10,500" },
      total: "RM 39,500",
    },
  },

  "diploma-in-multimedia-design": {
    code: "R2/213/4/0237 (A5933) 06/27",
    overview:
      "If you love outstanding visual images, digital animation, mobile apps, video games, interactive advertisement, and media caricature, ALFA University College offers you a Diploma in Multimedia Design. This course applied new technology in engaging media content for students to explore.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Audio Editor",
      "AV Director",
      "2D / 3D Animator",
      "Digital Art Director",
      "Game Developer",
      "Game Character Artist",
      "Illustrator",
      "Interface Designer",
      "Interactive Designer",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 11,500", year2: "RM 10,500", year3: "RM 10,500" },
      total: "RM 39,500",
    },
  },

  "diploma-in-architecture": {
    code: "R2/581/4/0099A (A7672) 06/29",
    overview:
      "It is time to DRAW your blueprint of the future. Architecture is not only a platform for mind illustration but a medium for you to create magnificent and first-class designs for the world. ALFA University College offers you more than just a piece of knowledge. A valuable experience is waiting ahead.",
    studyMode: "Full Time",
    durationOfStudy: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Architectural Assistant",
      "Technical Assistant",
      "Designer",
      "Building Product Executive",
      "CAD Draught person",
      "Landscape Designer",
      "Perspective Renderer",
      "Project Manager",
      "Property Manager",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 17,500", year2: "RM 16,500", year3: "RM 13,500" },
      total: "RM 54,500",
    },
  },

  "diploma-in-interior-architecture": {
    code: "R2/581/4/0098A (A7673) 06/29",
    overview:
      "Across the world, many companies are looking for young talent to design new projects. It is about presenting outstanding ideas and materializing them into an eye-witness product. ALFA University College offers you a Diploma in Interior Architecture covering creativity, communication, organization, and the latest technology.",
    studyMode: "Full Time",
    durationOfStudy: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Interior Designer",
      "Architectural Assistant",
      "CAD Designer",
      "Exhibition Designer",
      "Interior Quantity Executive",
      "Furniture Designer",
      "Freelance Designer",
      "Perspective Illustrator",
      "Assistant Project Manager",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 17,500", year2: "RM 16,500", year3: "RM 13,500" },
      total: "RM 54,500",
    },
  },

  "diploma-in-culinary-arts": {
    code: "N/811/4/0409 (PA 14848) 11/26",
    overview:
      "The Malaysia Food and Beverages Industry (F&B) is identified as a fast-growing market and one of the main contributors to the national account. ALFA University College offers an outstanding module for culinary arts with lots of hands-on activities.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Commis Chef",
      "Station Chef / Chef de Partie Sous",
      "Chef Executive Chef / Chef de Cuisine",
      "Pastry Chef",
      "Food Marketing Consultant",
      "Food Service Manager",
      "Restaurant Manager",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 12,500", year2: "RM 12,000", year3: "RM 12,000" },
      total: "RM 43,500",
    },
  },

  "diploma-in-tourism-management": {
    code: "R/1015/4/0064 (FA12167) 11/29",
    overview:
      "Global tourism today has become a rapidly expanding people-oriented industry. ALFA University College venture into the Tourism Management industry so that our graduates will be among the best that this industry could ever have.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Tour Leader",
      "Tour Executive",
      "Travel Consultant",
      "Travel agencies Manager",
      "Attraction Officer",
      "Hotel manager",
      "Customer Service Department",
      "Reservation and Ticketing",
      "Consultant Airline Ground and Cabin Crew",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 12,000", year2: "RM 12,000", year3: "RM 12,000" },
      total: "RM 43,000",
    },
  },

  "diploma-in-hotel-management-work-based-learning": {
    code: "N/1013/4/0003 (PA 15591) 05/27",
    overview:
      "Work-Based Learning programme designed for real hotel industry involvement while studying.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Hotel Executive",
      "Front Office Executive",
      "Guest Service Officer",
      "Hotel Supervisor",
      "Hospitality Operations Executive",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 12,000", year2: "RM 12,500", year3: "RM 12,500" },
      total: "RM 44,000",
    },
  },

  "diploma-in-retail-management-work-based-learning": {
    code: "N/0414/4/0017 (PA 15585) 06/27",
    overview:
      "Designed with work-based learning where students participate directly in retail operations and gain experience.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Retail Executive",
      "Store Supervisor",
      "Retail Operations Executive",
      "Merchandising Executive",
      "Retail Entrepreneur",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 11,500", year2: "RM 10,500", year3: "RM 10,500" },
      total: "RM 39,500",
    },
  },

  "diploma-in-event-management": {
    code: "R/1015/4/0070 (PA 13342) 07/30",
    overview:
      "Covers fundamentals of the diverse events industry from small gatherings to major concerts and weddings.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Event Executive",
      "Event Coordinator",
      "Project Executive",
      "Wedding Planner",
      "Marketing & Events Executive",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 11,500", year2: "RM 10,500", year3: "RM 10,500" },
      total: "RM 39,500",
    },
  },

  "diploma-in-law-enforcement-management": {
    code: "N/1032/4/0001 (FA 15207) 03/27",
    overview:
      "Focuses on leadership qualities, professional development, and training for law enforcement management careers.",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Enforcement Officer",
      "Security Officer",
      "Compliance Executive",
      "Investigation Assistant",
      "Safety & Security Executive",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 11,500", year2: "RM 10,500", year3: "RM 10,500" },
      total: "RM 39,500",
    },
  },

  "diploma-in-teaching-of-english-as-a-second-language-tesl": {
    code: "(N/340/4/0654)(MQA/FA8031)01/26",
    overview:
      "First step towards a career as an English language teacher (7 semesters / 2 years 6 months).",
    studyMode: "Full Time",
    durationOfStudy: "2.5 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "English Teacher",
      "Language Trainer",
      "Tutor",
      "Education Assistant",
      "Academic Coordinator",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 10,500", year2: "RM 9,500", year3: "RM 9,500" },
      total: "RM 36,500",
    },
  },

  "diploma-in-healthcare-management": {
    code: "N/0414/4/0195 (PA 16927) 02/29",
    overview:
      "Focuses on healthcare operations and management such as anatomy, medical terminologies, planning, and promotion.",
    studyMode: "Full Time",
    durationOfStudy: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Healthcare Executive",
      "Clinic Administrator",
      "Medical Management Assistant",
      "Nursing Management Assistant",
      "Healthcare Operations Executive",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,500",
      additionalFees: "RM 1,000",
      tuition: { year1: "RM 15,000", year2: "RM 13,000", year3: "RM 13,000" },
      total: "RM 48,000",
    },
  },

  /* =========================
     BACHELOR PROGRAMS
     ========================= */

  "bachelor-of-arts-honours-business-administration": {
    code: "B1",
    overview:
      "The Bachelor of Arts (Honours) in Business Administration equips students with comprehensive knowledge in business management, strategic planning, marketing, finance, and organizational leadership. Graduates are prepared for diverse roles in the corporate world.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Business Manager",
      "Marketing Executive",
      "Operations Manager",
      "Business Analyst",
      "Entrepreneur",
      "Management Consultant",
      "Sales Director",
      "Corporate Strategist",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 13,500", year2: "RM 12,500", year3: "RM 12,500" },
      total: "RM 40,500",
    },
  },

  "bachelor-of-arts-honours-business-administration-odl": {
    code: "B2",
    overview:
      "The Bachelor of Arts (Honours) in Business Administration via Open Distance Learning (ODL) offers the same comprehensive business education with flexible study arrangements, allowing students to balance work and study commitments.",
    studyMode: "Coursework (ODL)",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Business Manager",
      "Marketing Executive",
      "Operations Manager",
      "Business Analyst",
      "Entrepreneur",
      "Management Consultant",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 0",
      tuition: { year1: "RM 10,000", year2: "RM 11,000", year3: "RM 11,000" },
      total: "RM 32,000",
    },
  },

  "bachelor-of-early-childhood-education-honours": {
    code: "B3",
    overview:
      "The Bachelor of Early Childhood Education (Honours) prepares educators to shape the minds of young children. This programme covers child development, pedagogy, curriculum design, and classroom management for early learning environments.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Early Childhood Teacher",
      "Preschool Director",
      "Education Coordinator",
      "Child Development Specialist",
      "Curriculum Designer",
      "School Counselor",
      "Kindergarten Owner",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 13,500", year2: "RM 12,500", year3: "RM 12,500" },
      total: "RM 40,500",
    },
  },

  "bachelor-of-e-business-honours": {
    code: "B4",
    overview:
      "The Bachelor of E-Business (Honours) combines business fundamentals with digital technology skills. Students learn about e-commerce strategies, digital marketing, online business operations, and technology-driven business solutions.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "E-Commerce Manager",
      "Digital Business Analyst",
      "E-Business Consultant",
      "Digital Marketing Manager",
      "Online Retail Manager",
      "Tech Entrepreneur",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 13,500", year2: "RM 12,500", year3: "RM 12,500" },
      total: "RM 40,500",
    },
  },

  "bachelor-honours-human-resource-management": {
    code: "B5",
    overview:
      "The Bachelor (Honours) in Human Resource Management provides in-depth knowledge of workforce management, talent acquisition, employee relations, compensation planning, and organizational development.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "HR Manager",
      "Talent Acquisition Specialist",
      "Compensation & Benefits Manager",
      "Training & Development Manager",
      "Employee Relations Officer",
      "Organizational Development Consultant",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 13,500", year2: "RM 12,500", year3: "RM 12,500" },
      total: "RM 40,500",
    },
  },

  "bachelor-of-information-technology-honours": {
    code: "B6",
    overview:
      "The Bachelor of Information Technology (Honours) provides comprehensive training in software development, database management, networking, and systems analysis. Students gain hands-on experience with current technologies and industry practices.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Database Administrator",
      "Network Engineer",
      "Web Developer",
      "IT Project Manager",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 14,000", year2: "RM 13,500", year3: "RM 13,500" },
      total: "RM 43,000",
    },
  },

  "bachelor-of-science-honours-in-hospitality-management": {
    code: "B7",
    overview:
      "The Bachelor of Science (Honours) in Hospitality Management prepares students for leadership roles in the hospitality industry. The programme covers hotel management, food & beverage operations, tourism, and event management.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Hotel Manager",
      "F&B Manager",
      "Resort Manager",
      "Events Manager",
      "Tourism Director",
      "Hospitality Consultant",
      "Revenue Manager",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 15,500", year2: "RM 13,500", year3: "RM 13,500" },
      total: "RM 44,500",
    },
  },

  "bachelor-of-arts-honours-graphic-design": {
    code: "B8",
    overview:
      "The Bachelor of Arts (Honours) in Graphic Design develops creative professionals skilled in visual communication, branding, typography, digital media, and design thinking. Students build a professional portfolio through hands-on projects.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Graphic Designer",
      "Art Director",
      "Creative Director",
      "Brand Identity Designer",
      "UI/UX Designer",
      "Publication Designer",
      "Freelance Designer",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 14,000", year2: "RM 13,500", year3: "RM 13,500" },
      total: "RM 43,000",
    },
  },

  "bachelor-of-arts-honours-creative-multimedia": {
    code: "B9",
    overview:
      "The Bachelor of Arts (Honours) in Creative Multimedia explores digital art, animation, interactive media, game design, and multimedia production. Students gain expertise in cutting-edge creative technologies.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Multimedia Designer",
      "3D Animator",
      "Game Designer",
      "Motion Graphics Artist",
      "Digital Content Creator",
      "Interactive Media Developer",
      "VFX Artist",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 14,000", year2: "RM 13,500", year3: "RM 13,500" },
      total: "RM 43,000",
    },
  },

  "bachelor-of-law-enforcement": {
    code: "B10",
    overview:
      "The Bachelor of Law Enforcement prepares students for careers in law enforcement, security management, and public safety. The programme covers criminal justice, investigation techniques, legal frameworks, and enforcement management.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Law Enforcement Officer",
      "Security Manager",
      "Investigation Officer",
      "Compliance Manager",
      "Public Safety Director",
      "Intelligence Analyst",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 13,500", year2: "RM 13,500", year3: "RM 13,500" },
      total: "RM 42,500",
    },
  },

  "bachelor-of-science-honours-in-architecture": {
    code: "B11",
    overview:
      "The Bachelor of Science (Honours) in Architecture provides comprehensive training in architectural design, building technology, sustainable design, and urban planning. Students develop skills through studio-based learning and real-world projects.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Architectural Designer",
      "Urban Planner",
      "Building Consultant",
      "Project Manager",
      "Landscape Architect",
      "Sustainability Consultant",
      "Interior Architect",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 20,000", year2: "RM 18,500", year3: "RM 18,500" },
      total: "RM 59,000",
    },
  },

  "bachelor-in-computer-science-cyber-security-and-networks": {
    code: "B12",
    overview:
      "The Bachelor in Computer Science (Cyber Security and Networks) trains students in cybersecurity, network infrastructure, ethical hacking, digital forensics, and information security management. Graduates are prepared for the growing demand in cybersecurity professionals.",
    studyMode: "Coursework",
    durationOfStudy: "3 Years",
    duration: "3 Years",
    intakes: ["January", "May", "September"],
    careers: [
      "Cybersecurity Analyst",
      "Network Security Engineer",
      "Penetration Tester",
      "Information Security Manager",
      "Digital Forensics Analyst",
      "Security Consultant",
      "IT Security Auditor",
    ],
    fees: {
      emgs: "RM 3,500",
      registrationInternational: "RM 2,000",
      additionalFees: "RM 2,000",
      tuition: { year1: "RM 16,000", year2: "RM 15,000", year3: "RM 15,000" },
      total: "RM 48,000",
    },
  },
};

/**
 * KEY ALIASES — maps short/variant slugs to canonical keys
 */
export const programDetailsAliases: Record<string, string> = {
  "diploma-in-early-childhood": "diploma-in-early-childhood-education",
  "diploma-in-early-childhood-odl": "diploma-in-early-childhood-education-odl",
  "diploma-in-hotel-management": "diploma-in-hotel-management-work-based-learning",
  "diploma-in-hotel-management-wbl": "diploma-in-hotel-management-work-based-learning",
  "diploma-in-retail-management": "diploma-in-retail-management-work-based-learning",
  "diploma-in-retail-management-wbl": "diploma-in-retail-management-work-based-learning",
  "diploma-in-tesl": "diploma-in-teaching-of-english-as-a-second-language-tesl",
  "diploma-in-teaching-of-english-as-a-second-language": "diploma-in-teaching-of-english-as-a-second-language-tesl",
  // Bachelor aliases
  "bachelor-of-arts-business-administration": "bachelor-of-arts-honours-business-administration",
  "bachelor-of-arts-business-administration-odl": "bachelor-of-arts-honours-business-administration-odl",
  "bachelor-of-early-childhood-education": "bachelor-of-early-childhood-education-honours",
  "bachelor-of-e-business": "bachelor-of-e-business-honours",
  "bachelor-of-human-resource-management": "bachelor-honours-human-resource-management",
  "bachelor-of-information-technology": "bachelor-of-information-technology-honours",
  "bachelor-of-science-hospitality-management": "bachelor-of-science-honours-in-hospitality-management",
  "bachelor-of-arts-graphic-design": "bachelor-of-arts-honours-graphic-design",
  "bachelor-of-arts-creative-multimedia": "bachelor-of-arts-honours-creative-multimedia",
  "bachelor-of-science-architecture": "bachelor-of-science-honours-in-architecture",
  "bachelor-in-computer-science": "bachelor-in-computer-science-cyber-security-and-networks",
  "bachelor-of-computer-science-cyber-security-and-networks": "bachelor-in-computer-science-cyber-security-and-networks",
};

export const resolveProgramDetailsKey = (key: string) =>
  programDetailsAliases[key] || key;
