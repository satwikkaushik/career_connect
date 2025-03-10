import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";

function signUpAdmin() {
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [fullName, setFullName] = useState("");
      const [designation, setDesignation] = useState("");
      const [adminID, setAdminID] = useState("");
      const [department, setDepartment] = useState("");
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/admin-dashboard");
        // Add new admin to the database
        //...
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
                              Admin Sign Up
                        </h2>

                        <div className="flex flex-col gap-5">
                              <TextField
                                    label="Full Name"
                                    variant="outlined"
                                    fullWidth
                                    value={fullName}
                                    onChange={(e) =>
                                          setFullName(e.target.value)
                                    }
                                    InputProps={{
                                          style: {
                                                color: "#fff",
                                                borderColor: "#00A6FB",
                                          },
                                    }}
                                    sx={inputStyles}
                              />

                              <TextField
                                    label="Admin ID"
                                    variant="outlined"
                                    fullWidth
                                    value={adminID}
                                    onChange={(e) => setAdminID(e.target.value)}
                                    InputProps={{
                                          style: {
                                                color: "#fff",
                                                borderColor: "#00A6FB",
                                          },
                                    }}
                                    sx={inputStyles}
                              />

                              <TextField
                                    label="Designation"
                                    variant="outlined"
                                    fullWidth
                                    value={designation}
                                    onChange={(e) =>
                                          setDesignation(e.target.value)
                                    }
                                    InputProps={{
                                          style: {
                                                color: "#fff",
                                                borderColor: "#00A6FB",
                                          },
                                    }}
                                    sx={inputStyles}
                              />
                              <TextField
                                    label="Department"
                                    variant="outlined"
                                    fullWidth
                                    value={department}
                                    onChange={(e) =>
                                          setDepartment(e.target.value)
                                    }
                                    InputProps={{
                                          style: {
                                                color: "#fff",
                                                borderColor: "#00A6FB",
                                          },
                                    }}
                                    sx={inputStyles}
                              />

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
                              <div className="flex gap-2 mt-3">
                                    <input
                                          type="checkbox"
                                          name=""
                                          id=""
                                          onChange={() =>
                                                navigate("/signup-user")
                                          }
                                    />
                                    <label htmlFor="">Sign up as User</label>
                              </div>
                              <Button
                                    variant="contained"
                                    fullWidth
                                    sx={buttonStyles}
                                    onClick={handleSubmit}
                              >
                                    Sign Up
                              </Button>
                        </div>

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

export default signUpAdmin;
