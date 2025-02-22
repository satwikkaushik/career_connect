export async function landing(req, res) {
  return res.end("Student Home Page!");
}

export async function getJobs(req, res) {
  return res.end(`Job ID: ${req.params.id}`);
}

export async function getExpiredJobs(req, res) {
  return res.end("Expired Jobs!");
}
