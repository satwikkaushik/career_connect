import {
  createNewJob,
  fetchAllJobs,
  fetchJobById,
  updateJobById,
} from "../services/jobServices.js";

export async function landing(req, res) {
  return res.end("Uni Landing!");
}

export async function getJobs(req, res) {
  const allJobs = await fetchAllJobs();
  if (!allJobs) {
    return res.status(404).json({ message: "No jobs found!" });
  }
  return res.status(200).json(allJobs);
}

export async function getJobByID(req, res) {
  const job = await fetchJobById(req.params.id);
  if (!job) {
    return res.status(404).json({ message: "Job not found!" });
  }
  return res.status(200).json(job);
}

export async function setNewJob(req, res) {
  try {
    const {
      title,
      company,
      tags,
      jobType,
      description,
      roles,
      requirements,
      salary,
      location,
      deadline,
      applyLink,
      course,
      branch,
      semester,
    } = req.body;

    if (
      !title ||
      !company ||
      !tags ||
      !jobType ||
      !salary ||
      !location ||
      !deadline ||
      !applyLink ||
      !course ||
      !branch ||
      !semester
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const job = await createNewJob({
      title,
      company,
      tags,
      jobType,
      description,
      roles,
      requirements,
      salary,
      location,
      deadline,
      applyLink,
      course,
      branch,
      semester,
    });

    return res.status(201).json(job);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function setJobByID(req, res) {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Job ID is required!" });
    }

    const {
      title,
      company,
      tags,
      jobType,
      description,
      roles,
      requirements,
      salary,
      location,
      deadline,
      applyLink,
      course,
      branch,
      semester,
    } = req.body;

    if (
      !title ||
      !company ||
      !tags ||
      !jobType ||
      !salary ||
      !location ||
      !deadline ||
      !applyLink ||
      !course ||
      !branch ||
      !semester
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const job = await updateJobById(req.params.id, {
      title,
      company,
      tags,
      jobType,
      description,
      roles,
      requirements,
      salary,
      location,
      deadline,
      applyLink,
      course,
      branch,
      semester,
    });

    return res.status(201).json(job);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function getAnalytics(req, res) {
  return res.end("Analytics!");
}

export async function getAnalyticsByJobID(req, res) {
  return res.end(`Analytics for Job ID: ${req.params.id}`);
}
