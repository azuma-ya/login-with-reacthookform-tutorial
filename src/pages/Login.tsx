import React from "react";
import LoginFormContainer from "../components/login/container/LoginFormContainer";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (err?: Error) => {
    if (!err) {
      console.log("ログインしました。");
      navigate("/");
    } else {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginFormContainer onLogin={handleLogin} />
    </Box>
  );
};

export default Login;
