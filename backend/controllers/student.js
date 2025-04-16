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

export async function getUnappliedJobs(req, res) {
  try {
    const missedJobs = [];
    const studentId = req.user._id.toString();

    const jobs = await fetchExpiredJobs();
    if (!jobs) {
      return res.status(200).json({ missedJobs: missedJobs });
    }

    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
      const analytics = await fetchAnalyticsByJobID("" + jobs._id);

      if (!analytics) {
        missedJobs.add({ id: job._id, title: job.title, company: job.company });
        continue;
      } else {
        if (!analytics.appliedStudents.includes(studentId)) {
          missedJobs.add({
            id: job._id,
            title: job.title,
            company: job.company,
          });
          continue;
        }
      }
    }

    return res.status(200).json({ missedJobs: missedJobs });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
