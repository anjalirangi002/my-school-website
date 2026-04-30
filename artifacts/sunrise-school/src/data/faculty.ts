/**
 * Faculty / Teaching staff data for the Faculty page.
 * Update this file to add, remove, or edit teacher profiles.
 */

export type Department =
  | "Leadership"
  | "Mathematics"
  | "Science"
  | "English"
  | "Hindi & Sanskrit"
  | "Social Studies"
  | "Computer Science"
  | "Commerce"
  | "Arts & Music"
  | "Physical Education"
  | "Primary Wing";

export type Teacher = {
  name: string;
  role: string;
  department: Department;
  qualification: string;
  experience: string;
  bio: string;
};

export const PRINCIPAL: Teacher = {
  name: "Mr. Khushi Ram",
  role: "Principal",
  department: "Leadership",
  qualification: "M.A., B.Ed.",
  experience: "30+ years in education",
  bio: "Heading Sunrise Senior Secondary School since its establishment, Mr. Khushi Ram brings three decades of teaching and administrative experience. He is committed to delivering quality CBSE education with values, discipline and modern teaching practices.",
};

export const TEACHERS: Teacher[] = [
  // Mathematics
  {
    name: "Mr. Suresh Kumar",
    role: "PGT Mathematics",
    department: "Mathematics",
    qualification: "M.Sc. (Maths), B.Ed.",
    experience: "18 years",
    bio: "Specialises in Class 11 & 12 Mathematics for both Medical and Non-Medical streams.",
  },
  {
    name: "Ms. Anita Sharma",
    role: "TGT Mathematics",
    department: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "10 years",
    bio: "Teaches Mathematics to Classes 6 to 10, focusing on conceptual clarity and board exam preparation.",
  },

  // Science
  {
    name: "Mr. Rajesh Verma",
    role: "PGT Physics",
    department: "Science",
    qualification: "M.Sc. (Physics), B.Ed.",
    experience: "15 years",
    bio: "Senior Physics faculty for Class 11 & 12 Non-Medical with strong NEET / JEE foundation focus.",
  },
  {
    name: "Mrs. Priya Singh",
    role: "PGT Chemistry",
    department: "Science",
    qualification: "M.Sc. (Chemistry), B.Ed.",
    experience: "12 years",
    bio: "Conducts senior secondary Chemistry classes with regular practical lab sessions.",
  },
  {
    name: "Dr. Meena Devi",
    role: "PGT Biology",
    department: "Science",
    qualification: "M.Sc. (Biology), Ph.D., B.Ed.",
    experience: "14 years",
    bio: "Leads the Medical stream Biology and supports students with NEET preparation guidance.",
  },
  {
    name: "Mr. Naveen Yadav",
    role: "TGT Science",
    department: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "8 years",
    bio: "Teaches integrated Science to Classes 6 to 10 with hands-on lab activities.",
  },

  // English
  {
    name: "Mrs. Kavita Mehra",
    role: "PGT English",
    department: "English",
    qualification: "M.A. (English), B.Ed.",
    experience: "16 years",
    bio: "Senior English faculty handling literature, grammar and creative writing for Classes 9 to 12.",
  },
  {
    name: "Ms. Pooja Aggarwal",
    role: "TGT English",
    department: "English",
    qualification: "M.A., B.Ed.",
    experience: "9 years",
    bio: "Focuses on communicative English and reading skills for middle and secondary classes.",
  },

  // Hindi & Sanskrit
  {
    name: "Mr. Ramesh Chand",
    role: "PGT Hindi",
    department: "Hindi & Sanskrit",
    qualification: "M.A. (Hindi), B.Ed.",
    experience: "20 years",
    bio: "Veteran Hindi teacher for senior secondary classes with strong literary expertise.",
  },
  {
    name: "Pt. Hari Om Shastri",
    role: "TGT Sanskrit",
    department: "Hindi & Sanskrit",
    qualification: "M.A. (Sanskrit), Shastri, B.Ed.",
    experience: "13 years",
    bio: "Teaches Sanskrit and conducts annual Shloka recitation and cultural events.",
  },

  // Social Studies
  {
    name: "Mrs. Sunita Rani",
    role: "PGT History / Political Science",
    department: "Social Studies",
    qualification: "M.A. (History), B.Ed.",
    experience: "17 years",
    bio: "Handles Humanities subjects for Class 11 & 12 Arts stream students.",
  },
  {
    name: "Mr. Deepak Saini",
    role: "TGT Social Science",
    department: "Social Studies",
    qualification: "M.A., B.Ed.",
    experience: "7 years",
    bio: "Teaches History, Geography and Civics for Classes 6 to 10.",
  },

  // Computer Science
  {
    name: "Mr. Manish Goyal",
    role: "PGT Computer Science",
    department: "Computer Science",
    qualification: "MCA, B.Ed.",
    experience: "11 years",
    bio: "Trains students in Python, web fundamentals and computer applications.",
  },

  // Commerce
  {
    name: "Mr. Vinod Bansal",
    role: "PGT Commerce / Accountancy",
    department: "Commerce",
    qualification: "M.Com., B.Ed.",
    experience: "14 years",
    bio: "Heads the Commerce stream covering Accountancy, Business Studies and Economics.",
  },

  // Arts & Music
  {
    name: "Ms. Reena Kapoor",
    role: "Arts & Crafts Teacher",
    department: "Arts & Music",
    qualification: "BFA, Diploma in Fine Arts",
    experience: "9 years",
    bio: "Conducts art, craft and drawing classes; coordinates the Annual Art Exhibition.",
  },
  {
    name: "Mr. Sandeep Saxena",
    role: "Music Teacher",
    department: "Arts & Music",
    qualification: "Sangeet Visharad, B.Mus.",
    experience: "12 years",
    bio: "Trains students in vocal and instrumental music; prepares choir for school events.",
  },

  // Physical Education
  {
    name: "Mr. Joginder Singh",
    role: "Physical Education Teacher",
    department: "Physical Education",
    qualification: "B.P.Ed., M.P.Ed.",
    experience: "16 years",
    bio: "Coaches kabaddi, kho-kho, athletics and coordinates the Annual Sports Day.",
  },

  // Primary Wing
  {
    name: "Mrs. Geeta Devi",
    role: "Primary Coordinator",
    department: "Primary Wing",
    qualification: "B.A., D.El.Ed., NTT",
    experience: "15 years",
    bio: "Heads the Playway and Primary Wing with a focus on play-based learning.",
  },
  {
    name: "Ms. Neha Gupta",
    role: "Primary Teacher (Class 1–2)",
    department: "Primary Wing",
    qualification: "B.A., D.El.Ed.",
    experience: "6 years",
    bio: "Caring class teacher for foundational classes, focusing on phonics and numeracy.",
  },
  {
    name: "Mrs. Rekha Yadav",
    role: "Primary Teacher (Class 3–5)",
    department: "Primary Wing",
    qualification: "B.A., B.Ed.",
    experience: "8 years",
    bio: "Engages young learners through activity-based teaching across all subjects.",
  },
];

export const DEPARTMENTS_ORDER: Department[] = [
  "Mathematics",
  "Science",
  "English",
  "Hindi & Sanskrit",
  "Social Studies",
  "Computer Science",
  "Commerce",
  "Arts & Music",
  "Physical Education",
  "Primary Wing",
];
