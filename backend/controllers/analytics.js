import {
  fetchAllAnalytics,
  fetchAnalyticsByJobID,
  studentApplied,
  studentSelected,
} from "../services/analyticsServices.js";

export async function getAllAnalytics(req, res) {
  try {
    const data = await fetchAllAnalytics();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getAnalyticsByJobID(req, res) {
  try {
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required!" });
    }

    const data = await fetchAnalyticsByJobID(jobId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function setStudentApplied(req, res) {
  try {
    const jobId = req.body.jobId;
    const studentId = req.body.studentId;

    if (!jobId || !studentId) {
      return res
        .status(400)
        .json({ message: "Job ID and Student ID are required!" });
    }

    const data = await studentApplied(jobId, studentId);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export async function setStudentSelected(req, res) {
  try {
    const jobId = req.body.jobId;
    const studentId = req.body.studentId;

    if (!jobId || !studentId) {
      return res
        .status(400)
        .json({ message: "Job ID and Student ID are required!" });
    }

    const data = await studentSelected(jobId, studentId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
