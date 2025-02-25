import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import {
      Button,
      TextField,
      IconButton,
      InputAdornment,
      MenuItem,
} from "@mui/material";
=======
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
>>>>>>> 512aa8f0397354ffa6c3851bd6ff871c0ad5d1e3
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";

const AuthPage = () => {
<<<<<<< HEAD
      const [isLogin, setIsLogin] = useState(true);
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [fullName, setFullName] = useState("");
      const [rollNo, setRollNo] = useState("");
      const [course, setCourse] = useState("");
      const [branch, setBranch] = useState("");
      const [semester, setSemester] = useState("");
      const navigate = useNavigate();

      const handleAuth = async () => {
            const geuEmailRegex = /^[0-9]+@geu\.ac\.in$/;

            if (geuEmailRegex.test(email)) {
                  await postData("https://x.api", { email, password });
                  navigate("/student-dashboard");
            } else if (email.includes("@")) {
                  await postData("https://y.api", { email, password });
                  navigate("/admin-dashboard");
            } else {
                  alert("Invalid credentials! Please enter a valid email.");
            }
      };

      const postData = async (url, data) => {
            try {
                  const response = await fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                  });

                  if (!response.ok) throw new Error("Failed to authenticate");
                  console.log("Success:", await response.json());
            } catch (error) {
                  console.error("Error:", error);
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
                              {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>

                        <div className="flex flex-col gap-5">
                              {!isLogin && (
                                    <>
                                          <TextField
                                                label="Full Name"
                                                variant="outlined"
                                                fullWidth
                                                value={fullName}
                                                onChange={(e) =>
                                                      setFullName(
                                                            e.target.value
                                                      )
                                                }
                                                InputProps={{
                                                      style: {
                                                            color: "#fff",
                                                            borderColor:
                                                                  "#00A6FB",
                                                      },
                                                }}
                                                sx={inputStyles}
                                          />

                                          <TextField
                                                label="University Roll No"
                                                variant="outlined"
                                                fullWidth
                                                value={rollNo}
                                                onChange={(e) =>
                                                      setRollNo(e.target.value)
                                                }
                                                InputProps={{
                                                      style: {
                                                            color: "#fff",
                                                            borderColor:
                                                                  "#00A6FB",
                                                      },
                                                }}
                                                sx={inputStyles}
                                          />

                                          <TextField
                                                label="Courses"
                                                variant="outlined"
                                                fullWidth
                                                select
                                                onChange={(e) =>
                                                      setCourse(e.target.value)
                                                }
                                                SelectProps={{ native: true }}
                                                sx={{
                                                      "& .MuiOutlinedInput-root":
                                                            {
                                                                  "& fieldset":
                                                                        {
                                                                              borderColor:
                                                                                    "#00A6FB",
                                                                        },
                                                                  "&:hover fieldset":
                                                                        {
                                                                              borderColor:
                                                                                    "#0582CA",
                                                                        },
                                                                  "&.Mui-focused fieldset":
                                                                        {
                                                                              borderColor:
                                                                                    "#00A6FB",
                                                                        },
                                                            },
                                                      "& label": {
                                                            color: "#ccc",
                                                      },
                                                      "& label.Mui-focused": {
                                                            color: "#00A6FB",
                                                      },
                                                }}
                                          >
                                                <option value=""></option>
                                                <option value="B.Tech CSE">
                                                      B.Tech CSE
                                                </option>
                                                <option value="B.Tech ECE">
                                                      B.Tech ECE
                                                </option>
                                                <option value="B.Tech IT">
                                                      B.Tech IT
                                                </option>
                                                <option value="B.Tech ME">
                                                      B.Tech ME
                                                </option>
                                                <option value="B.Tech Civil">
                                                      B.Tech Civil
                                                </option>
                                                <option value="BBA">BBA</option>
                                                <option value="MBA">MBA</option>
                                                <option value="BCA">BCA</option>
                                                <option value="MCA">MCA</option>
                                                <option value="B.Sc Data Science">
                                                      B.Sc Data Science
                                                </option>
                                                <option value="B.Sc Biotechnology">
                                                      B.Sc Biotechnology
                                                </option>
                                                <option value="B.A Economics">
                                                      B.A Economics
                                                </option>
                                                <option value="B.A English">
                                                      B.A English
                                                </option>
                                                <option value="B.Com">
                                                      B.Com
                                                </option>
                                                <option value="M.Com">
                                                      M.Com
                                                </option>
                                                <option value="Law (LLB)">
                                                      Law (LLB)
                                                </option>
                                                <option value="Pharmacy (B.Pharm)">
                                                      Pharmacy (B.Pharm)
                                                </option>
                                                <option value="Journalism & Mass Comm">
                                                      Journalism & Mass Comm
                                                </option>
                                                <option value="Fashion Design">
                                                      Fashion Design
                                                </option>
                                                <option value="Hotel Management">
                                                      Hotel Management
                                                </option>
                                                <option value="Other">
                                                      Other
                                                </option>
                                          </TextField>

                                          <TextField
                                                label="Branch"
                                                variant="outlined"
                                                fullWidth
                                                value={branch}
                                                onChange={(e) =>
                                                      setBranch(e.target.value)
                                                }
                                                InputProps={{
                                                      style: {
                                                            color: "#fff",
                                                            borderColor:
                                                                  "#00A6FB",
                                                      },
                                                }}
                                                sx={inputStyles}
                                          />

                                          <TextField
                                                select
                                                label="Semester"
                                                variant="outlined"
                                                fullWidth
                                                value={semester}
                                                onChange={(e) =>
                                                      setSemester(
                                                            e.target.value
                                                      )
                                                }
                                                InputProps={{
                                                      style: {
                                                            color: "#fff",
                                                            borderColor:
                                                                  "#00A6FB",
                                                      },
                                                }}
                                                sx={inputStyles}
                                          >
                                                {Array.from(
                                                      { length: 8 },
                                                      (_, i) => (
                                                            <MenuItem
                                                                  key={i + 1}
                                                                  value={i + 1}
                                                            >
                                                                  Semester{" "}
                                                                  {i + 1}
                                                            </MenuItem>
                                                      )
                                                )}
                                          </TextField>
                                    </>
                              )}

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
                              >
                                    {isLogin ? "Login" : "Sign Up"}
                              </Button>
                        </div>

                        <p className="text-gray-400 text-center mt-6">
                              {isLogin
                                    ? "Don't have an account?"
                                    : "Already have an account?"}{" "}
                              <span
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-[#00A6FB] font-semibold cursor-pointer hover:underline"
                              >
                                    {isLogin ? "Sign Up" : "Login"}
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
=======
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    const geuEmailRegex = /^[0-9]+@geu\.ac\.in$/;

    if (geuEmailRegex.test(email)) {
      await postData("https://x.api", { email, password });
      navigate("/student-dashboard");
    } else if (email.includes("@")) {
      await postData("https://y.api", { email, password });
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials! Please enter a valid email.");
    }
  };

  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to authenticate");
      console.log("Success:", await response.json());
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#051923]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[#003554] p-8 rounded-2xl shadow-2xl w-[400px] border border-[#00A6FB]/20 backdrop-blur-md"
      >
        <h2 className="text-white text-3xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <div className="flex flex-col gap-5">
          {!isLogin && (
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              InputProps={{
                style: { color: "#fff", borderColor: "#00A6FB" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#00A6FB" },
                  "&:hover fieldset": { borderColor: "#0582CA" },
                  "&.Mui-focused fieldset": { borderColor: "#00A6FB" },
                },
                "& label": { color: "#ccc" },
                "& label.Mui-focused": { color: "#00A6FB" },
              }}
            />
          )}

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: { color: "#fff", borderColor: "#00A6FB" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#00A6FB" },
                "&:hover fieldset": { borderColor: "#0582CA" },
                "&.Mui-focused fieldset": { borderColor: "#00A6FB" },
              },
              "& label": { color: "#ccc" },
              "& label.Mui-focused": { color: "#00A6FB" },
            }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { color: "#fff", borderColor: "#00A6FB" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff sx={{ color: "#ccc" }} /> : <Visibility sx={{ color: "#ccc" }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#00A6FB" },
                "&:hover fieldset": { borderColor: "#0582CA" },
                "&.Mui-focused fieldset": { borderColor: "#00A6FB" },
              },
              "& label": { color: "#ccc" },
              "& label.Mui-focused": { color: "#00A6FB" },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#00A6FB",
              padding: "12px 0",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#0582CA" },
            }}
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </div>

        <p className="text-gray-400 text-center mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#00A6FB] font-semibold cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </motion.div>
    </div>
  );
>>>>>>> 512aa8f0397354ffa6c3851bd6ff871c0ad5d1e3
};

export default AuthPage;
