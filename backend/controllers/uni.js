import { createJob as createNewJob } from "../services/jobServices.js";

export async function landing(req, res) {
  return res.end("Uni Landing!");
}

export async function getJobs(req, res) {
  return res.end("List of Jobs!");
}

export async function getJobByID(req, res) {
  return res.end(`Job ID: ${req.params.id}`);
}

export async function setJobByID(req, res) {
  return res.end(`Job ID: ${req.params.id} Updated!`);
}

export async function getNewJobForm(req, res) {
  return res.end("New Job Form!");
}

export async function setNewJobForm(req, res) {
  return res.end("New Job Created!");
}

export async function getAnalytics(req, res) {
  return res.end("Analytics!");
}

export async function getAnalyticsByJobID(req, res) {
  return res.end(`Analytics for Job ID: ${req.params.id}`);
}

export async function createJob(req, res) {
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
