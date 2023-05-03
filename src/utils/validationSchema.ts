import { z } from "zod";

const userSchemaErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_literal:
      // true/falseチェックボックス用メッセージ
      return { message: "利用規約に同意する必要があります。" };
  }
  return { message: ctx.defaultError };
};

export const registerValidationSchema = z.object({
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
  // terms: z.boolean().refine((terms) => terms, {
  //   message: "利用規約に同意する必要があります。 ",
  // }),
  terms: z.literal(true, { errorMap: userSchemaErrorMap }),
});

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "メールアドレスは必須です。" })
    .email({ message: "正しいメールアドレスを入力してください。" }),
  password: z
    .string({ required_error: "パスワードは必須です。" })
    .min(6, { message: "パスワードは６文字以上で入力してください。" }),
});
