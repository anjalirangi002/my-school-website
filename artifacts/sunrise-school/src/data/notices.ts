/**
 * Shared notices data — used by Home page (latest 4) and Updates page (all).
 * To add or edit notices, modify this file only.
 */

export type NoticeCategory = "ADMISSION" | "EXAM" | "EVENT" | "NOTICE" | "RESULT" | "HOLIDAY";

export type Notice = {
  id: string;
  badge: NoticeCategory;
  date: string;
  title: string;
  desc: string;
  detail: string;
  color: string;
};

export const NOTICES: Notice[] = [
  {
    id: "admission-2025-26",
    badge: "ADMISSION",
    date: "15 Oct 2024",
    title: "Admissions Open for Academic Session 2025-26",
    desc: "Registrations for Playway to Class 11 are now open. Limited seats available.",
    detail:
      "Sunrise Senior Secondary School invites applications for the academic session 2025-26 from Playway through Class 11 (all four streams — Medical, Non-Medical, Commerce and Arts). Application forms are available at the school office between 8:00 AM and 3:00 PM, Monday to Saturday. Required documents: birth certificate, transfer certificate (for transfer cases), report card of last class passed, Aadhaar copy, and four recent passport-size photographs.",
    color: "bg-primary text-white",
  },
  {
    id: "preboard-schedule",
    badge: "EXAM",
    date: "05 Nov 2024",
    title: "Class 10 & 12 Pre-Board Exams Schedule Released",
    desc: "The datesheet for upcoming pre-boards is available on the student portal.",
    detail:
      "The pre-board examination datesheet for Class 10 and Class 12 has been released. Exams will commence from 02 December 2024 and conclude on 18 December 2024. Students must report to the examination hall 15 minutes before the scheduled time with their school identity card and admit slip. The full datesheet is available at the school office and on the parent WhatsApp group.",
    color: "bg-sky-600 text-white",
  },
  {
    id: "annual-sports-day",
    badge: "EVENT",
    date: "15 Dec 2024",
    title: "Annual Sports Day — 15 December 2024",
    desc: "Join us in cheering for our talented athletes at the school ground.",
    detail:
      "The Annual Sports Day will be held on 15 December 2024 at the school ground from 9:00 AM. Parents and guardians are cordially invited. Events include 100m & 200m races, relay, long jump, kabaddi, kho-kho, tug-of-war and the much-loved parents' race. Prize distribution by the Chief Guest will follow at 1:30 PM.",
    color: "bg-primary text-white",
  },
  {
    id: "ptm-january",
    badge: "NOTICE",
    date: "10 Jan 2025",
    title: "Parent-Teacher Meeting — Saturday, 12 PM",
    desc: "A mandatory PTM to discuss student progress and upcoming assessments.",
    detail:
      "A Parent-Teacher Meeting is scheduled for Saturday, 11 January 2025 from 12:00 PM to 3:00 PM. Class teachers will share progress reports, discuss areas of improvement, and answer parents' queries. Attendance of at least one parent / guardian is mandatory. Please carry the student's diary.",
    color: "bg-sky-700 text-white",
  },
  {
    id: "republic-day",
    badge: "EVENT",
    date: "26 Jan 2026",
    title: "Republic Day Celebration — 26 January 2026",
    desc: "Flag hoisting, cultural programme and patriotic performances by students.",
    detail:
      "The 77th Republic Day will be celebrated at the school with flag hoisting at 8:00 AM by the Principal Mr. Khushi Ram, followed by a cultural programme featuring patriotic songs, group dance, a skit on freedom fighters, and an inspiring speech by senior students. Refreshments will be served. All parents are warmly invited.",
    color: "bg-primary text-white",
  },
  {
    id: "winter-break",
    badge: "HOLIDAY",
    date: "24 Dec 2024",
    title: "Winter Break — School Closed 24 Dec to 1 Jan",
    desc: "School will remain closed for winter vacation. Classes resume 2 January 2025.",
    detail:
      "Sunrise Senior Secondary School will remain closed from 24 December 2024 to 1 January 2025 on account of winter vacation. Classes will resume on Thursday, 2 January 2025 at the regular timing of 8:00 AM. Holiday homework has been shared with each class. Wishing all students and parents a joyful holiday season.",
    color: "bg-sky-600 text-white",
  },
  {
    id: "cbse-results-2024",
    badge: "RESULT",
    date: "13 May 2024",
    title: "CBSE Board Results 2024 — 100% Pass for 5th Consecutive Year",
    desc: "Heartiest congratulations to all our Class 10 and Class 12 students.",
    detail:
      "We are proud to announce that Sunrise Senior Secondary School has achieved 100% results in the CBSE Board Examinations 2024 for both Class 10 and Class 12 — for the fifth year in a row. Our toppers have secured outstanding marks across Medical, Non-Medical, Commerce and Arts streams. Congratulations to our students, parents and the entire faculty for this proud achievement.",
    color: "bg-primary text-white",
  },
  {
    id: "science-exhibition",
    badge: "EVENT",
    date: "20 Feb 2025",
    title: "Annual Science Exhibition & Project Display",
    desc: "Students from Classes 6–12 will showcase innovative science projects and working models.",
    detail:
      "The Annual Science Exhibition will be held on 20 February 2025 from 10:00 AM to 2:00 PM in the school auditorium and labs. Students from Classes 6 to 12 will present working models, charts and experiments across Physics, Chemistry, Biology and Computer Science. Best three projects in each category will be awarded. Parents and members of the local community are warmly invited.",
    color: "bg-sky-700 text-white",
  },
];
