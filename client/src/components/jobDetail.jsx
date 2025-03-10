import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeJob } from "../redux/jobSlice"; 
import {
      ArrowBack,
      Work,
      CalendarToday,
      Business,
      LocationOn,
      AttachMoney,
      Verified,
      Delete,
} from "@mui/icons-material";
import { Button, Chip } from "@mui/material";

const JobDetail = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [isChecked, setIsChecked] = useState(false);
      const dispatch = useDispatch();

      const editDetails = ()=>{
            navigate(`/admin-dashboard/edit-job/${id}`); // Redirect to edit job page
      }

      // Access job details from Redux store
      const jobs = useSelector((state) => state.jobs.jobs); // Access nested array

      const job = jobs.find((job) => job.id === Number(id)); // Convert id to number
      const userRole = useSelector((state) => state.jobs.userRole);
      console.log(userRole);

      // Handle case when job is not found
      if (!job) {
            return (
                  <div className="min-h-screen flex items-center justify-center text-white">
                        <h1>Job not found</h1>
                  </div>
            );
      }

      const clickChange = () => {
            setIsChecked(!isChecked);
            
      };

      const handleDelete = () => {
            dispatch(removeJob(job.id)); // Dispatch action to remove the job
            navigate("/admin-dashboard"); // Redirect after deletion
      };

      return (
            <div className="min-h-screen bg-[#051923] text-white px-4 py-6 pt-20 md:pt-10 lg:pt-10  md:px-8">
                  {/* Back Button */}
                  {userRole === "admin" ? (
                        <button
                              onClick={() => navigate("/admin-dashboard")}
                              className="fixed top-4 left-4 bg-[#00A6FB] text-white p-3 flex rounded-full hover:bg-[#0582CA] transition"
                        >
                              <ArrowBack fontSize="small" />
                        </button>
                  ) : (
                        <button
                              onClick={() => navigate("/student-dashboard")}
                              className="fixed top-4 left-4 bg-[#00A6FB] text-white p-3 flex rounded-full hover:bg-[#0582CA] transition"
                        >
                              <ArrowBack fontSize="small" />
                        </button>
                  )}

                  <div className="max-w-4xl relative mx-auto bg-[#003554] p-6 md:p-8 rounded-xl shadow-lg border border-[#00A6FB]/30">
                        {(userRole==="admin")?<Button
                              onClick={handleDelete}
                              aria-label="delete"
                              className="!absolute top-6 right-8 !bg-primary hover:!bg-deepBlue !w-10 !h-10 !min-w-0 rounded-full flex items-center justify-center shadow-md"
                        >
                              <Delete
                                    className="text-white"
                                    fontSize="medium"
                              />
                        </Button>:<></>}
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
                                    <Verified className="text-[#00A6FB]" /> Job
                                    Type:{" "}
                                    <span className="font-semibold">
                                          {job.jobType}
                                    </span>
                              </p>
                              <p className="text-gray-300 flex items-center gap-2">
                                    <AttachMoney className="text-[#00A6FB]" />{" "}
                                    Salary:{" "}
                                    <span className="font-semibold">
                                          {job.salary}
                                    </span>
                              </p>
                              <p className="text-gray-300 flex items-center gap-2">
                                    <CalendarToday className="text-[#00A6FB]" />{" "}
                                    Deadline:{" "}
                                    <span className="font-semibold">
                                          {job.deadline}
                                    </span>
                              </p>
                        </div>

                        {/* Skills Required */}
                        <div className="mt-6">
                              <h2 className="text-xl font-semibold text-[#00A6FB]">
                                    Skills Required
                              </h2>
                              <div className="flex flex-wrap gap-2 mt-2">
                                    {job.skills.map((skill, index) => (
                                          <Chip
                                                key={index}
                                                label={skill}
                                                sx={{
                                                      backgroundColor:
                                                            "#0f2b38",
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
                              <h2 className="text-xl font-semibold text-[#00A6FB]">
                                    Job Description
                              </h2>
                              <p className="text-gray-300 mt-2 leading-relaxed">
                                    {job.description}
                              </p>
                        </div>

                        {/* Responsibilities */}
                        <div className="mt-6">
                              <h2 className="text-xl font-semibold text-[#00A6FB]">
                                    Responsibilities
                              </h2>
                              <ul className="list-disc text-gray-300 pl-6 mt-2 space-y-1">
                                    {job.responsibilities.map((res, index) => (
                                          <li key={index}>{res}</li>
                                    ))}
                              </ul>
                        </div>

                        {/* Eligibility Criteria */}
                        <div className="my-6">
                              <h2 className="text-xl font-semibold text-[#00A6FB]">
                                    Eligibility Criteria
                              </h2>
                              <p className="text-gray-300 mt-2 leading-relaxed">
                                    {job.eligibility}
                              </p>
                        </div>

                        {userRole === "admin" ? (
                              <Button
                                    variant="contained"
                                    fullWidth
                                    className="mt-6"
                                    sx={{
                                          backgroundColor: isChecked
                                                ? "#6c757d"
                                                : "#00A6FB",
                                          padding: "12px 0",
                                          fontSize: "16px",
                                          fontWeight: "bold",
                                          borderRadius: "10px",
                                          "&:hover": {
                                                backgroundColor: isChecked
                                                      ? "#6c757d"
                                                      : "#0582CA",
                                          },
                                    }}
                                    onClick={
                                          editDetails
                                    }
                              >
                                    Edit Job Details
                              </Button>
                        ) : (
                              <>
                              <div className="flex gap-2 my-3">
                              <input type="checkbox" name="" id="" onChange={clickChange} disabled={job.applied}/>
                                    <p className="">
                                          select checkbox after applying
                                    </p>
                              </div>
                                    <Button
                                          variant="contained"
                                          fullWidth
                                          className="mt-6"
                                          sx={{
                                                backgroundColor: isChecked
                                                      ? "#6c757d"
                                                      : "#00A6FB",
                                                padding: "12px 0",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                borderRadius: "10px",
                                                "&:hover": {
                                                      backgroundColor: isChecked
                                                            ? "#6c757d"
                                                            : "#0582CA",
                                                },
                                          }}
                                          onClick={() =>
                                                window.open(
                                                      job.applyLink,
                                                      "_blank"
                                                )
                                          }
                                          disabled={isChecked || job.applied}
                                    >
                                          Apply Now
                                    </Button>
                              </>
                        )}
                  </div>
            </div>
      );
};

export default JobDetail;
