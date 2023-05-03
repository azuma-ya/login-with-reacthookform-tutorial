import React from "react";
import { Stack, Button, Box, Paper } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../../utils/validationSchema";
import RhfTextField from "../../ui/textField/RhfTextField";

export type LoginFormData = {
  username: string;
  email: string;
  password: string;
};

interface LoginFormProps {
  onLogin: (data: LoginFormData) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data: LoginFormData) => {
    onLogin(data);
  };

  return (
    <Paper elevation={5}>
      <Stack
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        sx={{ m: 2, width: "400px" }}
      >
        <Box component="h2" sx={{ mx: "auto" }}>
          ログイン
        </Box>
        <RhfTextField
          control={control}
          name="email"
          label="メールアドレス"
          required
        />
        <RhfTextField
          control={control}
          name="password"
          label="パスワード"
          required
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Stack>
    </Paper>
  );
};

export default LoginForm;
