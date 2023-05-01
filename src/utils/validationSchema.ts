import { z } from "zod";

export const validationSchema = z.object({
  username: z
    .string({ required_error: "名前は必須です。" })
    .min(4, { message: "名前は４文字以上で入力してください。" }),
  email: z
    .string({ required_error: "メールアドレスは必須です。" })
    .email({ message: "正しいメールアドレスを入力してください。" }),
  password: z
    .string({ required_error: "パスワードは必須です。" })
    .min(6, { message: "パスワードは６文字以上で入力してください。" }),
  date: z.date().max(new Date(), { message: "若すぎる!" }),
  gender: z.string().nonempty({ message: "いずれかを選択してください。" }),
});
