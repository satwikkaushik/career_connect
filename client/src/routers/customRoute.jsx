import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage.jsx";
import  LogIn  from "../components/Login.jsx";
import AppliedJobs from "../components/appliedJobs.jsx";
import MissedJobs from "../components/missedJob.jsx";
import ProfilePage from "../components/profile.jsx";
function Customroute() {
      return (
            <>
                  <Routes>
                        <Route path="/student-dashboard" element={<HomePage></HomePage>}></Route>
                        <Route path="/login" element={<LogIn></LogIn>}></Route>
                        <Route path="/applied-jobs" element={<AppliedJobs></AppliedJobs>}></Route>
                        <Route path="/missed-jobs" element={<MissedJobs></MissedJobs>}></Route>
                        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
                  </Routes>
            </>
      );
}
export default Customroute;
