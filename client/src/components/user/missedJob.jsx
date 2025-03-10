import JobCard from "../jobCard.jsx";
import Navbar from "./userNavbar.jsx";
import { useSelector } from "react-redux";


const MissedJobs = () => {
      const jobs = useSelector((state) => state.jobs.jobs); // Fetch jobs from Redux store
      return (
            <>
                  <Navbar header={"Missed Jobs"}></Navbar>
                  <div className="flex justify-center bg-[#051923] p-10 h-screen">
                        <div className="w-full max-w-2xl space-y-10">
                              {jobs.map((job) => (
                                    !job.missed ? (
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
                              ))}
                        </div>
                  </div>
            </>
      );
};

export default MissedJobs;
