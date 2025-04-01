import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../../redux/jobSlice"; // Import Redux action
import { ArrowBack } from "@mui/icons-material";

export default function AddJob() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs); // Get current jobs array
  const navigate = useNavigate(); // Use router navigation hook

  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    role: "",
    location: "",
    jobType: "",
    salary: "",
    lastDate: "",
    skills: "",
    description: "",
    responsibilities: "",
    eligibility: "",
    applyLink: "",
    applied: false,
    missed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: jobs.length + 1, // Auto-increment ID
      title: formData.jobTitle,
      company: formData.company,
      location: formData.location,
      jobType: formData.jobType,
      salary: formData.salary,
      deadline: formData.lastDate,
      skills: formData.skills.split(",").map((skill) => skill.trim()), // Convert skills to an array
      description: formData.description,
      eligibility: formData.eligibility,
      responsibilities: formData.responsibilities
        .split("\n")
        .map((res) => res.trim()), // Convert responsibilities to an array
      applyLink: formData.applyLink,
      applied: formData.applied,
      missed: formData.missed,
    };

    dispatch(addJob(newJob)); // Dispatch action to Redux

    console.log("New Job Added:", newJob);
    setFormData({
      jobTitle: "",
      company: "",
      role: "",
      location: "",
      jobType: "",
      salary: "",
      lastDate: "",
      skills: "",
      description: "",
      responsibilities: "",
      eligibility: "",
      applyLink: "",
      applied: false,
      missed: false,
    });
    navigate("/admin-dashboard");
  };

  const generateDescription = () => {
    const sampleDescriptions = {
      "Software Engineer": `As a Software Engineer at ${formData.company}, you will be responsible for designing, developing, and maintaining scalable applications.`,
      "Backend Developer": `As a Backend Developer at ${formData.company}, you will work on server-side logic, database management, and API integration.`,
      "Data Analyst": `As a Data Analyst at ${formData.company}, you will analyze data trends and provide insights using SQL and Python.`,
    };

    const sampleResponsibilities = `- Develop and maintain web applications using modern frameworks.\n- Write efficient and scalable backend services.\n- Collaborate with cross-functional teams for new features.\n- Optimize applications for performance and security.`;

    const sampleEligibility = `Candidates must have a Bachelor's degree in Computer Science or a related field with at least 1+ years of experience.`;

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
        <h2 className="text-xl font-bold text-primary mb-4">Add New Job</h2>

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
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
          />
          <input
            type="text"
            name="jobType"
            placeholder="Job Type (e.g., Full-Time)"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full p-3 bg-dark text-white border border-gray rounded-lg focus:border-primary focus:outline-none"
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary (e.g., $120,000 - $150,000)"
            value={formData.salary}
            onChange={handleChange}
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
            placeholder="Skills Required (comma separated)"
            value={formData.skills}
            onChange={handleChange}
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
            className="w-full p-3 bg-dark text-white border border-gray rounded-lg h-24 focus:border-primary focus:outline-none"
            required
          />
          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="w-full p-3 bg-dark text-white border border-gray rounded-lg h-24 focus:border-primary focus:outline-none"
          />
          <textarea
            name="eligibility"
            placeholder="Eligibility Criteria"
            value={formData.eligibility}
            onChange={handleChange}
            className="w-full p-3 bg-dark text-white border border-gray rounded-lg h-24 focus:border-primary focus:outline-none"
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => {
                navigate("/admin-dashboard");
              }}
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
