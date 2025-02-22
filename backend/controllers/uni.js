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
