import { z } from "zod";

export const formLoginSchema = z.object({
  email: z
    .string({ required_error: "O campo 'email' é obrigatório" })
    .min(1)
    .email({ message: "O campo 'email' deve ser um email válido" }),
  password: z
    .string({ required_error: "O campo 'password' é obrigatório" })
    .min(6, { message: "O campo 'password' deve ter pelo menos 6 caracteres" }),
});

export type FormLoginData = z.infer<typeof formLoginSchema>;
