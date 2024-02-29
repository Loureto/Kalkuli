import { z } from "zod";
import { validatorCNPJ } from "@/shared/utils";

export const CreateAccountJuridicalSchema = z.object({
  company: z.string().min(1, "Insira o nome da empresa"),
  email: z.string().email("Email inválido"),
  cnpj: z.string().refine((value) => validatorCNPJ(value), "CNPJ inválido"),
  password: z.string().min(6, "Sua senha deve ter pelo menos 6 caracteres"),
});

export type CreateAccountJuridicalType = z.infer<
  typeof CreateAccountJuridicalSchema
>;
