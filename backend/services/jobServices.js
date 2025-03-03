import { Job } from "../models/job.js";

export async function fetchJobs(user) {
  try {
    const jobs = await Job.find({
      course: user.course,
      branch: user.branch,
      semester: user.semester,
    });
    return Promise.resolve(jobs);
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function fetchJobById(id) {
  try {
    const job = await Job.findById(id);
    return Promise.resolve(job);
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function fetchExpiredJobs() {
  try {
    const jobs = await Job.find({
      deadline: { $gt: new Date() },
    });
    return Promise.resolve(jobs);
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function createJob(details) {
  try {
    const job = await Job.create(details);
    return Promise.resolve(job);
  } catch (error) {
    return Promise.reject(error.message);
  }
}
