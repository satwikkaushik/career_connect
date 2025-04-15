import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserRole } from "../Redux/jobSlice";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";

const AuthPage = () => {
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);

      const navigate = useNavigate();
      const dispatch = useDispatch();

      const handleAuth = async () => {
            const geuEmailRegex = /^[0-9]+@geu\.ac\.in$/;
            const SERVER_URL = import.meta.env.VITE_SERVER_URL;
            setLoading(true);

            try {
                  if (geuEmailRegex.test(email)) {
                        const response = await axios.post(
                              `${SERVER_URL}/account/student/login`,
                              {
                                    email,
                                    password,
                              },
                              {
                                    headers: {
                                          "Content-Type": "application/json",
                                    },
                                    withCredentials: true,
                              }
                        );
                        if (response.status === 200) {
                              console.log(response.data);
                              dispatch(setUserRole("student"));
                              navigate("/student-dashboard");
                        }
                  } else if (email.includes("@")) {
                        const response = await axios.post(
                              `${SERVER_URL}/account/uni/login`,
                              {
                                    email,
                                    password,
                              },
                              {
                                    headers: {
                                          "Content-Type": "application/json",
                                    },
                                    withCredentials: true,
                              }
                        );
                        if (response.status === 200) {
                              console.log(response.data);
                              dispatch(setUserRole("admin"));
                              navigate("/admin-dashboard");
                        }
                  } else {
                        alert(
                              "Invalid credentials! Please enter a valid email."
                        );
                  }
            } catch (error) {
                  console.error("Authentication failed:", error);
                  alert("Authentication failed. Please try again.");
            } finally {
                  setLoading(false);
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
                              Welcome Back
                        </h2>

                        <div className="flex flex-col gap-5">
                              <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{
                                          style: {
                                                color: "#fff",
                                                borderColor: "#00A6FB",
                                          },
                                    }}
                                    sx={inputStyles}
                              />

                              <TextField
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    variant="outlined"
                                    fullWidth
                                    value={password}
                                    onChange={(e) =>
                                          setPassword(e.target.value)
                                    }
                                    InputProps={{
                                          style: {
                                                color: "#fff",
                                                borderColor: "#00A6FB",
                                          },
                                          endAdornment: (
                                                <InputAdornment position="end">
                                                      <IconButton
                                                            onClick={() =>
                                                                  setShowPassword(
                                                                        !showPassword
                                                                  )
                                                            }
                                                            edge="end"
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

                              <Button
                                    variant="contained"
                                    fullWidth
                                    sx={buttonStyles}
                                    onClick={handleAuth}
                                    disabled={loading}
                              >
                                    {loading ? "Loading..." : "Login"}
                              </Button>
                        </div>

                        <p className="text-gray-400 text-center mt-6">
                              Don&apos;t have an account?
                              <span
                                    onClick={() => navigate("/signup-user")}
                                    className=" pl-1 text-[#00A6FB] font-semibold cursor-pointer hover:underline"
                              >
                                    Sign Up
                              </span>
                        </p>
                  </motion.div>
            </div>
      );
};

// Common Styles
const inputStyles = {
      "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#00A6FB" },
            "&:hover fieldset": { borderColor: "#0582CA" },
            "&.Mui-focused fieldset": { borderColor: "#00A6FB" },
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

export default AuthPage;
