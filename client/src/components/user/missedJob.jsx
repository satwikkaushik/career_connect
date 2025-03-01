import JobCard from "../jobCard.jsx";
import Navbar from "../navbar.jsx";

const jobData = [
      {
            id: 1,
            jobTitle: "Software Engineer",
            company: "Google",
            role: "Frontend Developer",
            lastDate: "March 30, 2025",
            description:
                  "Develop scalable UI components using React.js and Tailwind CSS.",
      },
      {
            id: 2,
            jobTitle: "Backend Developer",
            company: "Amazon",
            role: "Backend Engineer",
            lastDate: "April 15, 2025",
            description:
                  "Work with Node.js, Express, and MongoDB to develop robust APIs.",
      },
      {
            id: 3,
            jobTitle: "Data Analyst",
            company: "Microsoft",
            role: "Data Scientist",
            lastDate: "May 10, 2025",
            description:
                  "Analyze data trends and provide insights using Python and SQL.",
      },
];

const MissedJobs = () => {
      return (
            <>
                  <Navbar header={"Missed Jobs"}></Navbar>
                  <div className="flex justify-center bg-[#051923] p-10">
                        <div className="w-full max-w-2xl space-y-10">
                              {jobData.map((job) => (
                                    <JobCard key={job.id} job={job} x={1} />
                              ))}
                        </div>
                  </div>
            </>
      );
};

export default MissedJobs;
