import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowBack,
  Work,
  CalendarToday,
  Business,
  LocationOn,
  AttachMoney,
  Verified,
} from "@mui/icons-material";
import { Button, Chip } from "@mui/material";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    id,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$120,000 - $150,000",
    deadline: "March 15, 2025",
    skills: ["React", "Node.js", "JavaScript", "AWS", "MongoDB"],
    description:
      "As a Software Engineer at Google, you will be responsible for designing, developing, and maintaining scalable applications.",
    eligibility:
      "Candidates must have a Bachelor's degree in Computer Science or related field with 1+ years of experience in software development.",
    responsibilities: [
      "Develop and maintain web applications using React and Node.js.",
      "Write efficient and scalable backend services.",
      "Collaborate with cross-functional teams for new features.",
      "Optimize applications for performance and security.",
    ],
  });

  return (
    <div className="min-h-screen bg-[#051923] text-white px-4 py-6 pt-20 md:pt-10 lg:pt-10  md:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/student-dashboard")}
        className="fixed top-4 left-4 bg-[#00A6FB] text-white p-3 flex rounded-full hover:bg-[#0582CA] transition"
      >
        <ArrowBack fontSize="small" />
      </button>

      <div className="max-w-4xl mx-auto bg-[#003554] p-6 md:p-8 rounded-xl shadow-lg border border-[#00A6FB]/30">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00A6FB] flex items-center gap-2">
          <Work /> {job.title}
        </h1>
        <p className="text-gray-300 flex items-center gap-2 mt-2">
          <Business /> {job.company}
        </p>
        <p className="text-gray-400 flex items-center gap-2">
          <LocationOn /> {job.location}
        </p>

        {/* Job Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <p className="text-gray-300 flex items-center gap-2">
            <Verified className="text-[#00A6FB]" /> Job Type:{" "}
            <span className="font-semibold">{job.jobType}</span>
          </p>
          <p className="text-gray-300 flex items-center gap-2">
            <AttachMoney className="text-[#00A6FB]" /> Salary:{" "}
            <span className="font-semibold">{job.salary}</span>
          </p>
          <p className="text-gray-300 flex items-center gap-2">
            <CalendarToday className="text-[#00A6FB]" /> Deadline:{" "}
            <span className="font-semibold">{job.deadline}</span>
          </p>
        </div>

        {/* Skills Required */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-[#00A6FB]">Skills Required</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{
                  backgroundColor: "#0f2b38",
                  color: "#E2E8F0",
                  fontSize: "14px",
                  padding: "4px 8px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-[#00A6FB]">Job Description</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">{job.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-[#00A6FB]">Responsibilities</h2>
          <ul className="list-disc text-gray-300 pl-6 mt-2 space-y-1">
            {job.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>

        {/* Eligibility Criteria */}
        <div className="my-6">
          <h2 className="text-xl font-semibold text-[#00A6FB]">Eligibility Criteria</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">{job.eligibility}</p>
        </div>

        {/* Apply Button */}
        <Button
          variant="contained"
          fullWidth
          className="mt-6"
          sx={{
            backgroundColor: "#00A6FB",
            padding: "12px 0",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#0582CA" },
          }}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobDetail;
