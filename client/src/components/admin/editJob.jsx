import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateJob } from "../../Redux/jobSlice";

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

      // Get job details from Redux store
      const jobs = useSelector((state) => state.jobs.jobs);
      const job = jobs.find((job) => job.id === Number(id));

      if (!job) {
            return (
                  <h1 className="text-white text-center mt-10">Job not found</h1>
            );
      }

      // Local state for form fields
      const [formData, setFormData] = useState({
            title: job.title,
            company: job.company,
            location: job.location,
            jobType: job.jobType,
            salary: job.salary,
            deadline: formatDateForInput(job.deadline), // Convert deadline format
            skills: job.skills.join(", "), // Convert array to string
            description: job.description,
            responsibilities: job.responsibilities.join("\n"), // Convert array to string
            eligibility: job.eligibility,
      });


      // Handle input change
      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };

      // Handle form submission
      const handleSubmit = (e) => {
            e.preventDefault();

            const updatedJob = {
                  ...job,
                  ...formData,
                  deadline: new Date(formData.deadline).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                  ), // Convert back
                  skills: formData.skills
                        .split(",")
                        .map((skill) => skill.trim()), // Convert back to array
                  responsibilities: formData.responsibilities
                        .split("\n")
                        .map((res) => res.trim()), // Convert back to array
            };

            dispatch(updateJob(updatedJob)); // Dispatch update action
            navigate("/admin-dashboard"); // Redirect back
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
                                    { label: "Eligibility Criteria", name: "eligibility" },
                              ].map(({ label, name }) => (
                                    <div key={name}>
                                          <label className="block text-gray mb-1">{label}</label>
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
                                    <label className="block text-gray mb-1">Deadline</label>
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
                                    <label className="block text-gray mb-1">Skills (comma-separated)</label>
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
                                    <label className="block text-gray mb-1">Job Description</label>
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
                                    <label className="block text-gray mb-1">Responsibilities (one per line)</label>
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
