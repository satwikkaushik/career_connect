import {
  fetchJobs,
  fetchJobById,
  fetchExpiredJobs,
} from "../services/jobServices.js";

export async function getJobs(req, res) {
  try {
    const jobs = await fetchJobs(req.user);

    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getJobById(req, res) {
  try {
    const job = await fetchJobById(req.params.id);

    return res.status(200).json(job);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getExpiredJobs(req, res) {
  try {
    const jobs = await fetchExpiredJobs();

    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
