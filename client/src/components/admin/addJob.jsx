import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../../Redux/jobSlice";
import { ArrowBack } from "@mui/icons-material";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

export default function AddJob() {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const [formData, setFormData] = useState({
            jobTitle: "",
            company: "",
            location: "",
            jobType: "",
            salary: "",
            lastDate: "",
            skills: "",
            description: "",
            responsibilities: "",
            eligibility: "",
            applyLink: "",
            course: "",
            branch: "",
            semester: "", // numeric
      });

      const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData((prevData) => ({
                  ...prevData,
                  [name]: type === "checkbox" ? checked : value,
            }));
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            // Build the newJob object in the required format
            const newJob = {
                  title: formData.jobTitle,
                  company: formData.company,
                  skills: formData.skills.split(",").map((skill) => skill.trim()),
                  jobType: formData.jobType,
                  description: formData.description,
                  responsibilities: formData.responsibilities
                        .split("\n")
                        .map((role) => role.trim())
                        .filter((r) => r !== ""),
                  eligibility: formData.eligibility
                        .split("\n")
                        .map((req) => req.trim())
                        .filter((r) => r !== ""),
                  salary: Number(formData.salary),
                  location: formData.location,
                  deadline: formData.lastDate,
                  applyLink: formData.applyLink,
                  course: formData.course,
                  branch: formData.branch,
                  semester: Number(formData.semester),
            };

            console.log("Payload to backend:", JSON.stringify(newJob, null, 2));

            try {
                  const response = await axios.post(
                        `${BACKEND_URL}/uni/jobs/new`,
                        newJob,
                        {
                              headers: {
                                    "Content-Type": "application/json",
                              },
                              withCredentials: true,
                        }
                  );

                  if (response.status === 200 || response.status === 201) {
                        dispatch(fetchJobs());
                        console.log("New Job Added:", newJob);
                        // Reset form data (if desired, you can add default values for course/branch/semester)
                        setFormData({
                              jobTitle: "",
                              company: "",
                              location: "",
                              jobType: "",
                              salary: "",
                              lastDate: "",
                              skills: "",
                              description: "",
                              responsibilities: "",
                              eligibility: "",
                              applyLink: "",
                              course: "",
                              branch: "",
                              semester: "",
                        });
                        navigate("/admin-dashboard");
                  }
            } catch (error) {
                  console.error(
                        "Error adding job:",
                        error.response?.data || error.message
                  );
                  alert(
                        "Failed to add job: " +
                              (error.response?.data?.message || error.message)
                  );
            }
      };

      const generateDescription = () => {
            const sampleDescriptions = {
                  "Software Engineer": `As a Software Engineer at ${formData.company}, you will be responsible for designing, developing, and maintaining scalable applications.`,
                  "Backend Developer": `As a Backend Developer at ${formData.company}, you will work on server-side logic, database management, and API integration.`,
                  "Data Analyst": `As a Data Analyst at ${formData.company}, you will analyze data trends and provide insights using SQL and Python.`,
            };

            const sampleResponsibilities =
                  `Assist in building scalable web applications\n` +
                  `Collaborate with senior developers\n` +
                  `Write clean, maintainable code`;

            const sampleEligibility =
                  `Knowledge of JavaScript and React\n` +
                  `Understanding of REST APIs\n` +
                  `Good problem-solving skills`;

            setFormData((prevData) => ({
                  ...prevData,
                  description:
                        sampleDescriptions[formData.jobTitle] ||
                        "Job description not available.",
                  responsibilities: sampleResponsibilities,
                  eligibility: sampleEligibility,
            }));
      };

      return (
            <div className="p-5 md:p-24 inset-0 flex items-center justify-center bg-dark bg-opacity-80">
                  <button
                        onClick={() => navigate("/admin-dashboard")}
                        className="fixed top-4 left-4 bg-[#00A6FB] text-white p-3 flex rounded-full hover:bg-[#0582CA] transition"
                  >
                        <ArrowBack />
                  </button>
                  <div className="bg-deepBlue mt-14 md:mt-0 p-6 rounded-xl w-[500px] shadow-lg border border-primary">
                        <h2 className="text-xl font-bold text-primary mb-4">
                              Add New Job
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                              <input
                                    type="text"
                                    name="jobTitle"
                                    placeholder="Job Title"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              {/* Role field is not part of the expected output */}
                              <input
                                    type="text"
                                    name="location"
                                    placeholder="Location (e.g., Remote)"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="text"
                                    name="jobType"
                                    placeholder="Job Type (e.g., Internship)"
                                    value={formData.jobType}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="number"
                                    name="salary"
                                    placeholder="Salary (numeric, e.g., 15000)"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="date"
                                    name="lastDate"
                                    value={formData.lastDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="text"
                                    name="skills"
                                    placeholder="Tags / Skills (comma separated, e.g., JavaScript, React, Node.js)"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="url"
                                    name="applyLink"
                                    placeholder="Apply Link (https://example.com)"
                                    value={formData.applyLink}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="text"
                                    name="course"
                                    placeholder="Course (e.g., B.Tech)"
                                    value={formData.course}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="text"
                                    name="branch"
                                    placeholder="Branch (e.g., Computer Science)"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />
                              <input
                                    type="number"
                                    name="semester"
                                    placeholder="Semester (numeric, e.g., 4)"
                                    value={formData.semester}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
                              />

                              <button
                                    type="button"
                                    onClick={generateDescription}
                                    className="w-full bg-brightBlue text-white px-4 py-2 rounded-lg hover:bg-primary transition"
                              >
                                    Generate Description with AI
                              </button>

                              <textarea
                                    name="description"
                                    placeholder="Job Description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg h-24 focus:border-primary focus:outline-none"
                              />
                              <textarea
                                    name="responsibilities"
                                    placeholder="Roles / Responsibilities (one per line)"
                                    value={formData.responsibilities}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg h-24 focus:border-primary focus:outline-none"
                              />
                              <textarea
                                    name="eligibility"
                                    placeholder="Eligibility / Requirements (one per line)"
                                    value={formData.eligibility}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-dark text-white border border-gray rounded-lg h-24 focus:border-primary focus:outline-none"
                              />

                              <div className="flex justify-between">
                                    <button
                                          type="button"
                                          onClick={() =>
                                                navigate("/admin-dashboard")
                                          }
                                          className="bg-gray text-dark px-4 py-2 rounded-lg hover:bg-brightBlue hover:text-white transition"
                                    >
                                          Cancel
                                    </button>
                                    <button
                                          type="submit"
                                          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-brightBlue transition"
                                    >
                                          Add Job
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
}
