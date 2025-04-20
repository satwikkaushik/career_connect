import "daisyui/dist/full.css";
import JobCard from "../jobCard.jsx";
import { useSelector } from "react-redux";
import Navbar from "./userNavbar.jsx";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../../Redux/jobSlice.js";
import { useEffect } from "react";

export default function StudentDashboard() {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(fetchJobs());
      }, []);
      const jobs = useSelector((state) => state.jobs.jobs); // Fetch jobs from Redux store
      return (
            <div className="min-h-screen bg-dark text-white flex">
                  {/* Content */}
                  <div className="flex-1">
                        {/* Navbar */}
                        <Navbar header={"Student Dashboard"}></Navbar>
                        {/* Job Listings */}
                        {(jobs.length === 0) ? (
                              <div className="flex justify-center items-center h-5/6">
                                    <h1 className="text-xl">No jobs available for you</h1>
                              </div>
                        ) : (
                              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {jobs.map((job) =>
                                    job.applied || job.missed ? (
                                          <></>
                                    ) : (
                                          <JobCard
                                                key={job.id}
                                                job={job}
                                                user={0}
                                                applied={job.applied}
                                                missed={job.missed}
                                          ></JobCard>
                                    )
                              )}
                        </div>
                        )}
                  </div>
            </div>
      );
}
