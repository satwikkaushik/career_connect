import "daisyui/dist/full.css";
import JobCard from "../jobCard.jsx";
import { useSelector } from "react-redux";
import Navbar from "./userNavbar.jsx";

export default function StudentDashboard() {
      //fetch job from database
      const jobs = useSelector((state) => state.jobs.jobs); // Fetch jobs from Redux store
      return (
            <div className="min-h-screen bg-dark text-white flex">
                  {/* Content */}
                  <div className="flex-1">
                        {/* Navbar */}
                        <Navbar header={"Student Dashboard"}></Navbar>
                        {/* Job Listings */}
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
                  </div>
            </div>
      );
}
