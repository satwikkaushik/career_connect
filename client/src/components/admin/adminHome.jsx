import "daisyui/dist/full.css";
import JobCard from "../jobCard.jsx";
import AdminNavbar from "./adminNavbar.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../../Redux/jobSlice";

export default function AdminDashboard() {
      const dispatch = useDispatch();
      const jobs = useSelector((state) => state.jobs.jobs);
      const [visibleJobs, setVisibleJobs] = useState(6);
      const navigate = useNavigate();

      useEffect(() => {
            dispatch(fetchJobs());
      }, []);

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
                  <AdminNavbar header={"Admin Dashboard"} />

                  {/* Job Listings */}
                  <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Display limited jobs dynamically */}
                        {jobs.slice(0, visibleJobs).map((job) => (
                              <JobCard key={job.id} job={job} x={0} admin={1} />
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
                              onClick={() =>
                                    navigate("/admin-dashboard/jobs/new")
                              }
                              className="bg-primary text-white text-2xl font-bold p-5 px-7 rounded-full hover:bg-brightBlue transition"
                        >
                              +
                        </button>
                        <span className="absolute -top-2 left-3/4 md:left-[58%] transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-gray-700 text-white text-sm px-3 py-1 rounded-md transition">
                              Add New Job
                        </span>
                  </div>
            </div>
      );
}
