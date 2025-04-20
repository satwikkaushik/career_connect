import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { fetchAnalytics } from "../../Redux/jobSlice";
import { useEffect } from "react";

export default function Analytics() {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(fetchAnalytics());
      }, []);
      const jobs = useSelector((state) => state.jobs.jobs);
      const analytics = useSelector((state) => state.jobs.analytics);
      const navigate = useNavigate();

      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 md:p-16 min-h-screen bg-dark"
            >
                  {/* Back Button */}
                  <motion.button
                        onClick={() => navigate("/admin-dashboard")}
                        className="fixed top-4 left-4 bg-[#00A6FB] text-white p-3 rounded-full hover:bg-[#0582CA] transition"
                        whileHover={{ scale: 1.1 }}
                  >
                        <ArrowBack />
                  </motion.button>

                  {/* Header */}
                  <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-3xl mt-14 md:mt-0 lg:mt-0 font-bold text-primary text-center mb-8"
                  >
                        Job Analytics Dashboard
                  </motion.h2>

                  {/* Job Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {jobs.map((job) => {
                              const jobAnalytics = analytics?.find(
                                    (item) => item.job_id._id === job._id
                              );

                              return (
                                    <motion.div
                                          whileHover={{ scale: 1.05 }}
                                          key={job.id}
                                          className="bg-gradient-to-b from-[#003554] to-[#051923] text-white p-5 rounded-lg border border-white shadow-lg"
                                    >
                                          <h3 className="text-xl font-bold text-[#00A6FB]">
                                                {job.title}
                                          </h3>
                                          <p className="text-white">
                                                {job.company}
                                          </p>
                                          <p className="text-[#00A6FB]">
                                                {job.jobType}
                                          </p>
                                          <p>Location: {job.location}</p>
                                          <p>Salary: {job.salary}</p>
                                          <p>
                                                Applicants:{" "}
                                                {jobAnalytics?.applied_students
                                                      ?.length || 0}
                                          </p>
                                          <p className="text-green-400">
                                                Selected:{" "}
                                                {jobAnalytics?.selected_students
                                                      ?.length || 0}
                                          </p>

                                          <Button
                                                variant="contained"
                                                fullWidth
                                                sx={{
                                                      mt: 2,
                                                      bgcolor: "#00A6FB",
                                                      "&:hover": {
                                                            bgcolor: "#0582CA",
                                                      },
                                                }}
                                                onClick={() =>
                                                      navigate(
                                                            `/admin-dashboard/analytics/${jobAnalytics._id}`
                                                      )
                                                }
                                          >
                                                View Detailed Analytics
                                          </Button>
                                    </motion.div>
                              );
                        })}
                  </div>
            </motion.div>
      );
}
