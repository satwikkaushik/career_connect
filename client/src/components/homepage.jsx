import "daisyui/dist/full.css";
import JobCard from "./jobCard";
import Navbar from "../components/navbar.jsx";
import { Dashboard } from "@mui/icons-material";

const jobs = [
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Google",
      role: "Frontend Developer",
      lastDate: "March 30, 2025",
      description: "Develop scalable UI components using React.js and Tailwind CSS.",
    },
    {
      id: 2,
      jobTitle: "Backend Developer",
      company: "Amazon",
      role: "Backend Engineer",
      lastDate: "April 15, 2025",
      description: "Work with Node.js, Express, and MongoDB to develop robust APIs.",
    },
    {
      id: 3,
      jobTitle: "Data Analyst",
      company: "Microsoft",
      role: "Data Scientist",
      lastDate: "May 10, 2025",
      description: "Analyze data trends and provide insights using Python and SQL.",
    },
    {
      id: 4,
      jobTitle: "Full Stack Developer",
      company: "Meta",
      role: "Software Developer",
      lastDate: "June 5, 2025",
      description: "Build and maintain full-stack applications using MERN stack.",
    },
    {
      id: 5,
      jobTitle: "DevOps Engineer",
      company: "Netflix",
      role: "Cloud Engineer",
      lastDate: "July 20, 2025",
      description: "Manage CI/CD pipelines and deploy scalable cloud solutions.",
    },
    {
      id: 6,
      jobTitle: "Cybersecurity Analyst",
      company: "IBM",
      role: "Security Engineer",
      lastDate: "August 12, 2025",
      description: "Ensure security compliance and protect systems from cyber threats.",
    },
    {
      id: 7,
      jobTitle: "Machine Learning Engineer",
      company: "Tesla",
      role: "AI Engineer",
      lastDate: "September 5, 2025",
      description: "Develop AI models for autonomous vehicles using deep learning.",
    },
    {
      id: 8,
      jobTitle: "Product Manager",
      company: "Apple",
      role: "Business Analyst",
      lastDate: "October 1, 2025",
      description: "Lead cross-functional teams to drive innovative product solutions.",
    },
  ];
  

export default function StudentDashboard() {

  return (
    <div className="min-h-screen bg-dark text-white flex">
      {/* Sidebar */}


      {/* Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar header={"Student Dashboard"}></Navbar>
        {/* Job Listings */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} x={0}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
}
