import React from "react";
import RegisterFormContainer from "../components/register/container/RegisterFormContainer";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (err?: Error) => {
    if (!err) {
      console.log("新規登録に成功しました。");
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
      <RegisterFormContainer onRegister={handleRegister} />
    </Box>
  );
};

export default Register;
