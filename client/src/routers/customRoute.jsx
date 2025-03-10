import { Routes, Route } from "react-router-dom";
import UserHome from "../components/user/userHome.jsx";
import LogIn from "../components/Login.jsx";
import AppliedJobs from "../components/user/appliedJobs.jsx";
import MissedJobs from "../components/user/missedJob.jsx";
import ProfilePage from "../components/profile.jsx";
import JobDetail from "../components/jobDetail.jsx";
import AdminHome from "../components/admin/adminHome.jsx";
import AddJob from "../components/admin/addJob.jsx";
import EditJob from "../components/admin/editJob.jsx";
import JobAnalytics from "../components/admin/analytics.jsx";
import DetAnalytics from "../components/admin/detailedAnalytics.jsx";
import SignUpUser from "../components/user/signUpUser.jsx";
import SignUpAdmin from "../components/admin/signUpAdmin.jsx";

function Customroute() {
      return (
            <>
                  <Routes>
                        <Route path="/" element={<LogIn></LogIn>}></Route>
                        <Route
                              path="/signup-admin"
                              element={<SignUpAdmin></SignUpAdmin>}
                        ></Route>
                        <Route
                              path="/signup-user"
                              element={<SignUpUser></SignUpUser>}
                        ></Route>
                        <Route
                              path="/student-dashboard"
                              element={<UserHome></UserHome>}
                        ></Route>
                        <Route
                              path="/admin-dashboard"
                              element={<AdminHome></AdminHome>}
                        ></Route>
                        <Route
                              path="/student-dashboard/applied-jobs"
                              element={<AppliedJobs></AppliedJobs>}
                        ></Route>
                        <Route
                              path="/student-dashboard/missed-jobs"
                              element={<MissedJobs></MissedJobs>}
                        ></Route>
                        <Route
                              path="/profile"
                              element={<ProfilePage></ProfilePage>}
                        ></Route>
                        <Route
                              path="/job/:id"
                              element={<JobDetail></JobDetail>}
                        ></Route>
                        <Route
                              path="/admin-dashboard/jobs/new"
                              element={<AddJob></AddJob>}
                        ></Route>
                        <Route
                              path="/admin-dashboard/edit-job/:id"
                              element={<EditJob />}
                        />
                        <Route
                              path="/admin-dashboard/analytics"
                              element={<JobAnalytics></JobAnalytics>}
                        ></Route>
                        <Route
                              path="/admin-dashboard/analytics/:id"
                              element={<DetAnalytics />}
                        />
                  </Routes>
            </>
      );
}
export default Customroute;
