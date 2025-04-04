import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateJob } from "../../Redux/jobSlice";
import axios from "axios";

// Helper function to format date correctly
const formatDateForInput = (dateString) => {
      const date = new Date(dateString);
      if (isNaN(date)) return ""; // Handle invalid dates
      return date.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format for input field
};

const EditJob = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const dispatch = useDispatch();

      // Local state for form fields
      const [formData, setFormData] = useState({
            title: "",
            company: "",
            location: "",
            jobType: "",
            salary: "",
            deadline: "",
            skills: "",
            description: "",
            responsibilities: "",
            eligibility: "",
      });

      // Get job details from Redux store
      const jobs = useSelector((state) => state.jobs.jobs);
      const job = jobs.find((job) => job.id === Number(id));

      // Update formData with job details after job is found
      useEffect(() => {
            if (job) {
                  setFormData({
                        title: job.title,
                        company: job.company,
                        location: job.location,
                        jobType: job.jobType,
                        salary: job.salary,
                        deadline: formatDateForInput(job.deadline),
                        skills: job.skills.join(", "),
                        description: job.description,
                        responsibilities: job.responsibilities.join("\n"),
                        eligibility: job.eligibility,
                  });
            }
      }, [job]);

      if (!job) {
            return (
                  <h1 className="text-white text-center mt-10">
                        Job not found
                  </h1>
            );
      }

      // Handle input change
      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };

      // Handle form submission
      const handleSubmit = async (e) => {
            e.preventDefault();

            const updatedJob = {
                  ...job,
                  ...formData,
                  deadline: new Date(formData.deadline).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                  ),
                  skills: formData.skills
                        .split(",")
                        .map((skill) => skill.trim()),
                  responsibilities: formData.responsibilities
                        .split("\n")
                        .map((res) => res.trim()),
            };

            try {
                  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
                  const response = await axios.put(
                        `${SERVER_URL}/uni/jobs/${id}`,
                        updatedJob
                  );
                  dispatch(updateJob(response.data)); // Update Redux store with response data
                  navigate("/admin-dashboard");
            } catch (error) {
                  console.error(
                        "Error updating job:",
                        error.response?.data || error.message
                  );
                  // Handle error appropriately
            }
      };

      return (
            <div className="min-h-screen bg-dark text-white px-4 py-6 pt-20 md:pt-10 lg:pt-10 md:px-8">
                  <div className="max-w-3xl mx-auto bg-deepBlue p-6 md:p-8 rounded-xl shadow-lg border border-primary/30">
                        <h1 className="text-2xl font-bold text-primary text-center mb-4">
                              Edit Job Details
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                              {/* Reusable input field */}
                              {[
                                    { label: "Job Title", name: "title" },
                                    { label: "Company Name", name: "company" },
                                    { label: "Location", name: "location" },
                                    { label: "Job Type", name: "jobType" },
                                    { label: "Salary", name: "salary" },
                                    {
                                          label: "Eligibility Criteria",
                                          name: "eligibility",
                                    },
                              ].map(({ label, name }) => (
                                    <div key={name}>
                                          <label className="block text-gray mb-1">
                                                {label}
                                          </label>
                                          <input
                                                type="text"
                                                name={name}
                                                value={formData[name]}
                                                onChange={handleChange}
                                                className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                          />
                                    </div>
                              ))}

                              {/* Deadline field */}
                              <div>
                                    <label className="block text-gray mb-1">
                                          Deadline
                                    </label>
                                    <input
                                          type="date"
                                          name="deadline"
                                          value={formData.deadline}
                                          onChange={handleChange}
                                          className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                              </div>

                              {/* Skills field */}
                              <div>
                                    <label className="block text-gray mb-1">
                                          Skills (comma-separated)
                                    </label>
                                    <input
                                          type="text"
                                          name="skills"
                                          value={formData.skills}
                                          onChange={handleChange}
                                          className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                              </div>

                              {/* Description field */}
                              <div>
                                    <label className="block text-gray mb-1">
                                          Job Description
                                    </label>
                                    <textarea
                                          name="description"
                                          rows="4"
                                          value={formData.description}
                                          onChange={handleChange}
                                          className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    ></textarea>
                              </div>

                              {/* Responsibilities field */}
                              <div>
                                    <label className="block text-gray mb-1">
                                          Responsibilities (one per line)
                                    </label>
                                    <textarea
                                          name="responsibilities"
                                          rows="4"
                                          value={formData.responsibilities}
                                          onChange={handleChange}
                                          className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    ></textarea>
                              </div>

                              {/* Submit Button */}
                              <button
                                    type="submit"
                                    className="w-full p-3 bg-primary text-white text-lg font-bold rounded-lg hover:bg-brightBlue transition"
                              >
                                    Update Job
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default EditJob;
