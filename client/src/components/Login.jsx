import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";

const AuthPage = () => {
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
};

export default AuthPage;
