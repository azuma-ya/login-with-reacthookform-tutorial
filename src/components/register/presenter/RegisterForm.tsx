import React from "react";
import { Stack, Button, Box, Paper } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../../../utils/validationSchema";
import RhfTextField from "../../ui/textField/RhfTextField";
import RhfDatePicker from "../../ui/datePicker/RhfDatePicker";
import RhfRadioGroup from "../../ui/radio/RhfRadioGroup";
import RhfCheckBox from "../../ui/checkBox/RhfCheckBox";

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  date: Date;
  avatar?: string;
  gender: "male" | "female" | "other" | "";
  terms: boolean;
};

interface RegisterFormProps {
  onRegister: (data: RegisterFormData) => void;
}

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const { control, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      date: new Date(),
      gender: "",
      terms: false,
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (
    data: RegisterFormData
  ) => {
    onRegister(data);
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
        <RhfDatePicker control={control} name="date" label="生年月日" />
        <RhfRadioGroup
          control={control}
          name="gender"
          label="Gender"
          radios={[
            { value: "male", label: "男性", required: true },
            { value: "female", label: "女性", required: true },
            { value: "other", label: "その他", required: true },
          ]}
        />
        <RhfCheckBox
          control={control}
          name="terms"
          required
          formlabel="利用規約"
          checkboxlabel="同意する"
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </Stack>
    </Paper>
  );
};

export default RegisterForm;
