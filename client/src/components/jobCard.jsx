import { motion } from "framer-motion";

const JobCard = ({ job,x }) => {
  console.log(x);
  return (
    <motion.div
      key={job.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-gradient-to-b from-[#003554] to-[#051923] shadow-lg border border-gray-700 p-5 rounded-xl overflow-hidden"
    >
      {/* Top Indicator */}
      <div className={`absolute top-0 left-0 w-full h-1 ${x === 1 ? "bg-red" : "bg-primary"}`}></div>


      {/* Job Details */}
      <h2 className="text-xl font-semibold text-primary">{job.jobTitle}</h2>
      <p className="text-gray-300 text-lg">{job.company}</p>
      <p className="text-sm text-brightBlue font-medium">{job.role}</p>
      <p className="text-xs text-gray-400">Last Date: {job.lastDate}</p>
      <p className="text-sm mt-2 text-gray-200">{job.description}</p>

      {/* Apply Button with Hover Glow Effect */}
      <motion.button
  whileHover={x !== 1 ? { scale: 1.1, boxShadow: "0px 0px 10px #00A6FB" } : {}}
  transition={{ type: "spring", stiffness: 300 }}
  className={`btn btn-primary w-full mt-3 ${x === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
  disabled={x === 1}
>
  Apply Now
</motion.button>

    </motion.div>
  );
};

export default JobCard;
