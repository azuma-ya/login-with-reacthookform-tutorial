import React, { useState } from "react";
import { Stack, Button, Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../../../utils/validationSchema";
import RhfTextField from "../../ui/textField/RhfTextField";
import AvatarButtonInput from "../../ui/button/AvatarButtonInput";
import RhfDatePicker from "../../ui/datepicer/RhfDatePicker";

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  date: any;
  avatar?: string;
};

interface RegisterFormProps {
  onRegister: (data: RegisterFormData) => void;
}

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const [avatarImage, setAvatarImage] = useState("");

  const { control, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: { username: "", email: "", password: "" },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (
    data: RegisterFormData
  ) => {
    onRegister(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length >= 1) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setAvatarImage(reader.result as string);
      });
      reader.readAsDataURL(file);
    }
  };

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
      sx={{ m: 2, width: "400px" }}
    >
      <Box component="h2" sx={{ mx: "auto" }}>
        新規登録
      </Box>
      <RhfTextField
        control={control}
        name="username"
        label="名前"
        required
        value={"aaa"}
      />
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
      <RhfDatePicker />
      <AvatarButtonInput
        src={avatarImage}
        sx={{ width: "50px", height: "50px" }}
        onChange={(e) =>
          handleImageChange(e as React.ChangeEvent<HTMLInputElement>)
        }
      />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  );
};

export default RegisterForm;
