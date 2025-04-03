import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Work, Business, LocationOn, MonetizationOn, People } from "@mui/icons-material";

export default function JobAnalytics() {
      const { id } = useParams();
      const navigate = useNavigate();

      // Fetch job and analytics data from Redux store
      const job = useSelector((state) =>
            state.jobs.jobs.find((job) => job.id === parseInt(id))
      );
      const jobAnalytics = useSelector((state) =>
            state.jobs.analytics.find((item) => item.id === parseInt(id))
      );

      if (!job || !jobAnalytics) {
            return <h2 className="text-center text-white mt-10">Job Not Found</h2>;
      }

      // Pie Chart Data
      const pieData = [
            { name: "Applied", value: jobAnalytics.applicants || 0, color: "#00A6FB" },
            { name: "Eligible", value: jobAnalytics.eligible || 0, color: "#0582CA" },
            { name: "Selected", value: jobAnalytics.selected || 0, color: "#00E396" },
      ];

      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 md:p-16 min-h-screen bg-dark"
            >
                  {/* Back Button */}
                  <motion.button
                        onClick={() => navigate("/admin-dashboard/analytics")}
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
                        className="text-3xl font-bold text-primary text-center mb-8 mt-16 lg:mt-0 md:mt-0"
                  >
                        Job Analytics - {job.company}
                  </motion.h2>

                  {/* Job Details Card */}
                  <div className="p-4 mb-5 bg-gradient-to-b from-[#001F3F] to-[#012A4A] text-white rounded-lg border border-white shadow-lg backdrop-blur-md">
                        <h1 className="text-primary text-xl font-bold flex items-center mb-1">
                              <Work className="text-2xl mr-2" />
                              {job.title}
                        </h1>
                        <p className="text-white text-lg flex items-center">
                              <Business className="text-xl mr-2" />
                              {job.company}
                        </p>

                        {/* Divider */}
                        <div className="bg-[#00A6FB] h-[2px] my-4 w-full"></div>

                        {/* Job Info Grid */}
                        <div className="grid grid-cols-2 gap-4">
                              <div>
                                    <p className="text-[#57aeda] font-bold flex items-center">
                                          <LocationOn className="text-lg mr-2" />
                                          Location:
                                    </p>
                                    <p className="text-white">{job.location}</p>
                              </div>

                              <div>
                                    <p className="text-[#57aeda] font-bold flex items-center">
                                          <MonetizationOn className="text-lg mr-2" />
                                          Salary:
                                    </p>
                                    <p className="text-white">{job.salary}</p>
                              </div>

                              <div>
                                    <p className="text-[#57aeda] font-bold">Type:</p>
                                    <p className="text-white">{job.jobType}</p>
                              </div>

                              <div>
                                    <p className="text-[#57aeda] font-bold flex items-center">
                                          <People className="text-lg mr-2" />
                                          Total Applicants:
                                    </p>
                                    <p className="text-white">{jobAnalytics.applicants || 0}</p>
                              </div>
                        </div>
                  </div>

                  {/* Grid Layout for Analytics and Lists */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pie Chart */}
                        <div className="p-4 bg-gradient-to-b from-[#001F3F] to-[#012A4A] text-white rounded-lg border border-white shadow-lg backdrop-blur-md">
                              <h3 className="text-lg font-semibold mb-2">Applicants Breakdown</h3>
                              <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                          <Pie
                                                data={pieData}
                                                cx="50%"
                                                cy="50%"
                                                label
                                                outerRadius={100}
                                                dataKey="value"
                                          >
                                                {pieData.map((entry, index) => (
                                                      <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                          </Pie>
                                          <Tooltip />
                                          <Legend />
                                    </PieChart>
                              </ResponsiveContainer>
                        </div>

                        {/* Applicants List */}
                        <div className="p-4 bg-gradient-to-b from-[#001F3F] to-[#012A4A] text-white rounded-lg border border-white shadow-lg backdrop-blur-md">
                              <h3 className="text-lg font-semibold mb-2">Applicants List</h3>
                              {job.applicants?.length > 0 ? (
                                    <ul>
                                          {job.applicants.map((applicant, index) => (
                                                <li key={index} className="text-gray-300">
                                                      {applicant.name} ({applicant.email})
                                                </li>
                                          ))}
                                    </ul>
                              ) : (
                                    <p className="text-white">No applicants yet.</p>
                              )}
                        </div>
                  </div>
            </motion.div>
      );
}
