import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, "O campo obrigatório")
    .email({ message: "E-mail válido" }),
  password: z.string().min(1, "O campo obrigatório"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
