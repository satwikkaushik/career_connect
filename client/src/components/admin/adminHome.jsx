import "daisyui/dist/full.css";
import JobCard from "../jobCard.jsx";
import Navbar from "../navbar.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./adminNavbar.jsx";

const initialJobs = [
      {
            id: 1,
            jobTitle: "Software Engineer",
            company: "Google",
            role: "Frontend Developer",
            lastDate: "March 30, 2025",
            description:
                  "Develop scalable UI components using React.js and Tailwind CSS.",
      },
      {
            id: 2,
            jobTitle: "Backend Developer",
            company: "Amazon",
            role: "Backend Engineer",
            lastDate: "April 15, 2025",
            description:
                  "Work with Node.js, Express, and MongoDB to develop robust APIs.",
      },
      {
            id: 3,
            jobTitle: "Data Analyst",
            company: "Microsoft",
            role: "Data Scientist",
            lastDate: "May 10, 2025",
            description:
                  "Analyze data trends and provide insights using Python and SQL.",
      },
      {
            id: 4,
            jobTitle: "Full Stack Developer",
            company: "Meta",
            role: "Software Developer",
            lastDate: "June 5, 2025",
            description:
                  "Build and maintain full-stack applications using MERN stack.",
      },
      {
            id: 5,
            jobTitle: "DevOps Engineer",
            company: "Netflix",
            role: "Cloud Engineer",
            lastDate: "July 20, 2025",
            description:
                  "Manage CI/CD pipelines and deploy scalable cloud solutions.",
      },
      {
            id: 6,
            jobTitle: "Cybersecurity Analyst",
            company: "IBM",
            role: "Security Engineer",
            lastDate: "August 12, 2025",
            description:
                  "Ensure security compliance and protect systems from cyber threats.",
      },
      {
            id: 7,
            jobTitle: "Machine Learning Engineer",
            company: "Tesla",
            role: "AI Engineer",
            lastDate: "September 5, 2025",
            description:
                  "Develop AI models for autonomous vehicles using deep learning.",
      },
      {
            id: 8,
            jobTitle: "Product Manager",
            company: "Apple",
            role: "Business Analyst",
            lastDate: "October 1, 2025",
            description:
                  "Lead cross-functional teams to drive innovative product solutions.",
      },
];

export default function AdminDashboard() {
      const [jobs, setJobs] = useState(initialJobs);
      const [visibleJobs, setVisibleJobs] = useState(6);
      const navigate = useNavigate();

      // Show More Function
      const showMoreJobs = () => {
            setVisibleJobs((prev) => Math.min(prev + 2, jobs.length));
      };

      // Show Less Function
      const showLessJobs = () => {
            setVisibleJobs(6);
      };


      return (
            <div className="min-h-screen bg-dark text-white flex flex-col">
                  {/* Navbar */}
                  <AdminNavbar header={"Admin Dashboard"}></AdminNavbar>

                  {/* Job Listings */}
                  <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Display limited jobs dynamically */}
                        {jobs.slice(0, visibleJobs).map((job) => (
                              <JobCard key={job.id} job={job} x={0} y={1}></JobCard>
                        ))}

                        {/* Show More Button */}
                        {visibleJobs < jobs.length && (
                              <div
                                    className="flex w-full h-10 items-center justify-center border-2 border-primary text-primary text-lg font-semibold rounded-lg p-6 cursor-pointer hover:bg-primary hover:text-white transition"
                                    onClick={showMoreJobs}
                              >
                                    Show More
                              </div>
                        )}

                        {/* Show Less Button */}
                        {visibleJobs > 6 && (
                              <div
                                    className="flex h-10 items-center justify-center border-2 border-red text-red text-lg font-semibold rounded-lg p-6 cursor-pointer hover:bg-red hover:text-white transition"
                                    onClick={showLessJobs}
                              >
                                    Show Less
                              </div>
                        )}
                        <br />
                  </div>
                  {/* Add Job Button */}
                  <div className="relative group flex justify-center mb-20 mt-5">
                        <button
                              onClick={() => navigate("/jobs/new")}
                              className="bg-primary text-white text-2xl font-bold p-5 px-7 rounded-full hover:bg-brightBlue transition"
                        >
                              +
                        </button>
                        <span className="absolute -top-2  left-3/4 md:left-[58%] transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-gray-700 text-white text-sm px-3 py-1 rounded-md transition">
                              Add New Job
                        </span>
                  </div>
            </div>
      );
}
