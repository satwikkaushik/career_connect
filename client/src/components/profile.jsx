import { useState, useEffect } from "react";
import { Edit, Check, CameraAlt } from "@mui/icons-material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
      // Load stored data from Local Storage
      const storedProfilePic =
            localStorage.getItem("profilePic") ||
            "https://via.placeholder.com/150";
      const storedName =
            localStorage.getItem("userName") || "Arpit Kumar Saxena";

      const [user, setUser] = useState({
            name: storedName,
            email: "2200000@geu.ac.in",
            role: "Student",
            universityRollNo: "220000XXX",
            course: "B.Tech",
            branch: "Computer Science & Engineering",
            semester: "6th Semester",
            profilePic: storedProfilePic,
      });

      const [editMode, setEditMode] = useState(false);
      const [tempName, setTempName] = useState(user.name);
      const navigate = useNavigate();

      // Save profile picture & name in Local Storage
      useEffect(() => {
            localStorage.setItem("profilePic", user.profilePic);
            localStorage.setItem("userName", user.name);
      }, [user.profilePic, user.name]);

      // Handle Edit & Save Actions
      const handleEdit = () => setEditMode(true);
      const handleSave = () => {
            setUser({ ...user, name: tempName });
            localStorage.setItem("userName", tempName);
            setEditMode(false);
      };

      // Handle Profile Picture Upload
      const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                        setUser({ ...user, profilePic: reader.result });
                        localStorage.setItem("profilePic", reader.result);
                  };
                  reader.readAsDataURL(file);
            }
      };

      return (
            <>
                  <button
                        onClick={() => navigate("/student-dashboard")}
                        className="absolute top-4 left-4 bg-[#00A6FB] text-white p-2 rounded-full hover:bg-[#0582CA] transition"
                  >
                        <ArrowBack />
                  </button>
                  <div className="flex flex-col items-center justify-center min-h-screen bg-[#051923] text-white p-6">
                        <div className="bg-[#003554] shadow-lg p-8 rounded-xl w-full max-w-md text-center border border-[#00A6FB]/30">
                              {/* Profile Picture Upload */}
                              <div className="relative inline-block">
                                    <img
                                          src={user.profilePic}
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

                              {/* User Information */}
                              <div className="mt-4">
                                    {/* Editable Name */}
                                    {editMode ? (
                                          <input
                                                type="text"
                                                value={tempName}
                                                onChange={(e) =>
                                                      setTempName(
                                                            e.target.value
                                                      )
                                                }
                                                className="bg-[#051923] text-white border border-[#00A6FB] px-3 py-2 rounded-md text-center w-full focus:ring focus:ring-[#00A6FB]/50"
                                          />
                                    ) : (
                                          <h2 className="text-2xl font-semibold">
                                                {user.name}
                                          </h2>
                                    )}

                                    <p className="text-gray-300">
                                          {user.email}
                                    </p>
                                    <p className="text-gray-400 font-semibold">
                                          Role: {user.role}
                                    </p>
                              </div>

                              {/* Additional User Details */}
                              <div className="mt-4 text-left space-y-3">
                                    <p className="text-gray-300">
                                          <span className="font-semibold text-white">
                                                University Roll No:{" "}
                                          </span>{" "}
                                          {user.universityRollNo}
                                    </p>
                                    <p className="text-gray-300">
                                          <span className="font-semibold text-white">
                                                Course:{" "}
                                          </span>{" "}
                                          {user.course}
                                    </p>
                                    <p className="text-gray-300">
                                          <span className="font-semibold text-white">
                                                Branch:{" "}
                                          </span>{" "}
                                          {user.branch}
                                    </p>
                                    <p className="text-gray-300">
                                          <span className="font-semibold text-white">
                                                Semester:{" "}
                                          </span>{" "}
                                          {user.semester}
                                    </p>
                              </div>

                              {/* Buttons */}
                              <div className="mt-6">
                                    {editMode ? (
                                          <button
                                                onClick={handleSave}
                                                className="bg-[#00A6FB] text-white px-6 py-2 rounded-md hover:bg-[#0582CA] transition"
                                          >
                                                <Check className="mr-1" /> Save
                                          </button>
                                    ) : (
                                          <button
                                                onClick={handleEdit}
                                                className="bg-[#00A6FB] text-white px-6 py-2 rounded-md hover:bg-[#0582CA] transition"
                                          >
                                                <Edit className="mr-1" /> Edit
                                                Profile
                                          </button>
                                    )}
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default ProfilePage;
