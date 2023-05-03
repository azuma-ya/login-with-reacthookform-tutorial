import React from "react";
import LoginFormContainer from "../components/login/container/LoginFormContainer";
import { Box } from "@mui/material";

const Login = () => {
  const handleLogin = (err?: Error) => {
    if (!err) {
      console.log("ログインしました。");
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
