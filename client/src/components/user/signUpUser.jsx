import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";

function SignUpUser() {
      const [showPassword, setShowPassword] = useState(false);
      const [formData, setFormData] = useState({
            uniRollNo: "",
            name: "",
            email: "",
            password: "",
            course: "",
            branch: "",
            semester: "",
      });

      const SERVER_URL = import.meta.env.VITE_SERVER_URL;

      const navigate = useNavigate();

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            // Convert semester and uniRollNo to numbers
            const formattedData = {
                  ...formData,
                  semester: Number(formData.semester),
                  uniRollNo: Number(formData.uniRollNo),
            };

            try {
                  const response = await axios.post(
                        `${SERVER_URL}/account/student/signup`,
                        formattedData,
                        {
                              headers: {
                                    "Content-Type": "application/json",
                              },
                        }
                  );
                  console.log("User registered:", response.data);
                  navigate("/student-dashboard");
            } catch (error) {
                  console.error("Registration failed:", error);
                  alert("Registration failed! Please try again.");
            }
      };

      return (
            <div className="flex items-center justify-center min-h-screen bg-[#051923]">
                  <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#003554] p-8 my-10 rounded-2xl shadow-2xl w-[400px] border border-[#00A6FB]/20 backdrop-blur-md"
                  >
                        <h2 className="text-white text-3xl font-bold text-center mb-6">
                              Create Account
                        </h2>

                        <form
                              className="flex flex-col gap-5 text-white"
                              onSubmit={handleSubmit}
                        >
                              <TextField
                                    label="Full Name"
                                    name="name"
                                    variant="outlined"
                                    fullWidth
                                    className="text-white"
                                    value={formData.name}
                                    onChange={handleChange}
                                    sx={inputStyles}
                              />

                              <TextField
                                    label="University Roll No"
                                    name="uniRollNo"
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    value={formData.uniRollNo}
                                    onChange={handleChange}
                                    sx={inputStyles}
                              />

                              {/* Course Selection */}
                              <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-[#012A4A] text-white border border-[#00A6FB] focus:outline-none focus:border-[#0582CA]"
                              >
                                    <option value="">Select Course</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="BCA">BCA</option>
                                    <option value="MCA">MCA</option>
                              </select>

                              <TextField
                                    label="Branch"
                                    name="branch"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.branch}
                                    onChange={handleChange}
                                    sx={inputStyles}
                              />

                              {/* Semester Selection */}
                              <select
                                    name="semester"
                                    value={formData.semester}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-[#012A4A] text-white border border-[#00A6FB] focus:outline-none focus:border-[#0582CA]"
                              >
                                    <option value="">Select Semester</option>
                                    {Array.from({ length: 8 }, (_, i) => (
                                          <option key={i + 1} value={i + 1}>
                                                Semester {i + 1}
                                          </option>
                                    ))}
                              </select>

                              <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.email}
                                    onChange={handleChange}
                                    sx={inputStyles}
                              />

                              <TextField
                                    label="Password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    variant="outlined"
                                    fullWidth
                                    value={formData.password}
                                    onChange={handleChange}
                                    InputProps={{
                                          endAdornment: (
                                                <InputAdornment position="end">
                                                      <IconButton
                                                            onClick={() =>
                                                                  setShowPassword(
                                                                        !showPassword
                                                                  )
                                                            }
                                                      >
                                                            {showPassword ? (
                                                                  <VisibilityOff
                                                                        sx={{
                                                                              color: "#ccc",
                                                                        }}
                                                                  />
                                                            ) : (
                                                                  <Visibility
                                                                        sx={{
                                                                              color: "#ccc",
                                                                        }}
                                                                  />
                                                            )}
                                                      </IconButton>
                                                </InputAdornment>
                                          ),
                                    }}
                                    sx={inputStyles}
                              />

                              <div className="flex gap-2 mt-3">
                                    <input
                                          type="checkbox"
                                          id="admin-signup"
                                          onChange={() =>
                                                navigate("/signup-admin")
                                          }
                                    />
                                    <label
                                          htmlFor="admin-signup"
                                          className="text-white"
                                    >
                                          Sign up as Admin
                                    </label>
                              </div>

                              <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={buttonStyles}
                              >
                                    Sign Up
                              </Button>
                        </form>

                        <p className="text-gray-400 text-center mt-6">
                              Already have an account?
                              <span
                                    onClick={() => navigate("/")}
                                    className="pl-1 text-[#00A6FB] font-semibold cursor-pointer hover:underline"
                              >
                                    Login
                              </span>
                        </p>
                  </motion.div>
            </div>
      );
}

// **Common Styles**
const inputStyles = {
      "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#00A6FB" },
            "&:hover fieldset": { borderColor: "#0582CA" },
            "&.Mui-focused fieldset": { borderColor: "#00A6FB" },
            "& input": { color: "#fff", backgroundColor: "#012A4A" }, // Ensures text remains white
      },
      "& label": { color: "#ccc" },
      "& label.Mui-focused": { color: "#00A6FB" },
};

const buttonStyles = {
      backgroundColor: "#00A6FB",
      padding: "12px 0",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "10px",
      "&:hover": { backgroundColor: "#0582CA" },
};

export default SignUpUser;
