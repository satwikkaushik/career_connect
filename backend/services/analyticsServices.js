import { Analytics } from "../models/analytics.js";

export async function fetchAllAnalytics() {
  try {
    const data = await Analytics.find();

    if (!data) {
      return Promise.reject("No data found");
    }

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function fetchAnalyticsByJobID(jobId) {
  try {
    const data = await Analytics.find({ job_id: jobId });

    if (!data) {
      return Promise.reject("No data found");
    }

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function studentApplied(jobId, studentId) {
  try {
    const data = await Analytics.findOne({ job_id: jobId });

    if (!data) {
      return Promise.reject("No data found");
    }

    data.applied_students.push(studentId);

    await data.save();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function studentSelected(jobId, studentId) {
  try {
    const data = await Analytics.findOne({ job_id: jobId });

    if (!data) {
      return Promise.reject("No data found");
    }

    data.selected_students.push(studentId);

    await data.save();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function createNewAnalytics(jobId) {
  try {
    const data = await Analytics.create({
      job_id: jobId,
      applied_students: [],
      selected_students: [],
    });

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
