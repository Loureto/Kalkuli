import { z } from "zod";
import { validatorCPF } from "@/shared/utils";

export const CreateAccountSchema = z.object({
  name: z.string().min(1, "Insira seu nome completo"),
  email: z.string().email("Email inválido"),
  cpf: z
    .string()
    .refine((value) => validatorCPF(value), { message: "CPF inválido" }),
  password: z.string().min(6, "Sua senha deve ter pelo menos 6 caracteres"),
});

export type CreateAccountType = z.infer<typeof CreateAccountSchema>;
