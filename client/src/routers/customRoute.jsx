import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage.jsx";
import LogIn from "../components/Login.jsx";
import AppliedJobs from "../components/appliedJobs.jsx";
import MissedJobs from "../components/missedJob.jsx";
import ProfilePage from "../components/profile.jsx";
import JobDetail from "../components/jobDetail.jsx";

function Customroute() {
      return (
            <>
                  <Routes>
                        <Route
                              path="/student-dashboard"
                              element={<HomePage></HomePage>}
                        ></Route>
                        <Route path="/" element={<LogIn></LogIn>}></Route>
                        <Route
                              path="/applied-jobs"
                              element={<AppliedJobs></AppliedJobs>}
                        ></Route>
                        <Route
                              path="/missed-jobs"
                              element={<MissedJobs></MissedJobs>}
                        ></Route>
                        <Route
                              path="/profile"
                              element={<ProfilePage></ProfilePage>}
                        ></Route>
                        <Route
                              path="/job/id"
                              element={<JobDetail></JobDetail>}
                        ></Route>
                  </Routes>
            </>
      );
}
export default Customroute;
