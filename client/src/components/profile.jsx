import { useState, useEffect } from "react";
import { CameraAlt, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = () => {
      const navigate = useNavigate();
      const userRole = useSelector((state) => state.jobs.userRole);

      // Load stored profile picture from Local Storage (if available)
      const storedProfilePic =
            localStorage.getItem("profilePic") ||
            "https://via.placeholder.com/150";

      const [profilePic, setProfilePic] = useState(storedProfilePic);

      // Save updated profile picture in Local Storage
      useEffect(() => {
            localStorage.setItem("profilePic", profilePic);
      }, [profilePic]);

      // Handle Profile Picture Upload
      const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                        setProfilePic(reader.result);
                        localStorage.setItem("profilePic", reader.result);
                  };
                  reader.readAsDataURL(file);
            }
      };

      // Static User Information
      const user = {
            name: "Arpit Kumar Saxena",
            email: "2200000@geu.ac.in",
            role: "Student",
            universityRollNo: "220000XXX",
            course: "B.Tech",
            branch: "Computer Science & Engineering",
            semester: "6th Semester",
      };
      // Static User Information
      const admin = {
            name: "Arpit Kumar Saxena",
            email: "2200000@geu.ac.in",
            role: "Admin",
            AdminID: "220000XXX",

      };

      return (
            <>
                  {/* Back Button */}
                  {userRole==="student" ? (
                        <button
                              onClick={() => navigate("/student-dashboard")}
                              className="absolute top-4 left-4 bg-[#00A6FB] text-white p-2 rounded-full hover:bg-[#0582CA] transition"
                        >
                              <ArrowBack />
                        </button>
                  ) : (
                        <button
                              onClick={() => navigate("/admin-dashboard")}
                              className="absolute top-4 left-4 bg-[#00A6FB] text-white p-2 rounded-full hover:bg-[#0582CA] transition"
                        >
                              <ArrowBack />
                        </button>
                  )}

                  <div className="flex flex-col items-center justify-center min-h-screen bg-[#051923] text-white p-6">
                        <div className="bg-[#003554] shadow-lg p-8 rounded-xl w-full max-w-md text-center border border-[#00A6FB]/30">
                              {/* Profile Picture with Upload Option */}
                              <div className="relative inline-block">
                                    <img
                                          src={profilePic}
                                          alt="Profile"
                                          className="w-32 h-32 rounded-full border-4 border-[#00A6FB] object-cover"
                                    />
                                    <label className="absolute bottom-2 right-2 bg-[#00A6FB] p-2 rounded-full cursor-pointer hover:bg-[#0582CA] transition">
                                          <CameraAlt className="text-white" />
                                          <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                          />
                                    </label>
                              </div>

                              {/* Static User Information */}
                              <div className="mt-4">
                                    <h2 className="text-2xl font-semibold">
                                          {userRole==="student" ? user.name : admin.name}
                                    </h2>
                                    <p className="text-gray-300">
                                          {userRole==="student" ? user.email : admin.email}
                                    </p>
                                    <p className="text-gray-400 font-semibold">
                                          {userRole==="student" ? user.role : admin.role}
                                    </p>
                              </div>

                              {userRole==="student" ? (
                                    <div className="mt-4 text-left space-y-3">
                                          <p className="text-gray-300">
                                                <span className="font-semibold text-white">
                                                      University Roll No:{" "}
                                                </span>
                                                {user.universityRollNo}
                                          </p>
                                          <p className="text-gray-300">
                                                <span className="font-semibold text-white">
                                                      Course:{" "}
                                                </span>
                                                {user.course}
                                          </p>
                                          <p className="text-gray-300">
                                                <span className="font-semibold text-white">
                                                      Branch:{" "}
                                                </span>
                                                {user.branch}
                                          </p>
                                          <p className="text-gray-300">
                                                <span className="font-semibold text-white">
                                                      Semester:{" "}
                                                </span>
                                                {user.semester}
                                          </p>
                                    </div>
                              ) : (
                                    <p className="text-gray-300">
                                          <span className="font-semibold text-white">
                                                AdminID:{" "}
                                          </span>
                                          {admin.AdminID}
                                    </p>
                              )}

                        </div>
                  </div>
            </>
      );
};

export default ProfilePage;
