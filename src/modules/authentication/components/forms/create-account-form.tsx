"use client";

import { Button, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface IFormLogin {
  control: any;
  handleSubmit: any;
  formState: any;
}

export const CreateAccountSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  cpf: z.string().min(1),
  password: z.string().min(1),
});

export type FormLoginData = z.infer<typeof CreateAccountSchema>;

export const createAccountFields = [
  { id: 1, name: "name", type: "text", placeholder: "Nome" },
  { id: 2, name: "email", type: "email", placeholder: "E-mail" },
  { id: 3, name: "cpf", type: "text", placeholder: "CPF" },
  { id: 4, name: "password", type: "password", placeholder: "Senha" },
];

export const CreateAccountForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(CreateAccountSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log([data]))}
      className="flex flex-col gap-4 mt-9"
    >
      {createAccountFields.map((field) => (
        <Controller
          key={field.id}
          control={control}
          name={field.name as any}
          render={({ fieldState: { error }, field: { ...rest } }) => (
            <Input
              type={field.type}
              size="md"
              placeholder={field.placeholder}
              variant="bordered"
              isInvalid={!!error?.message}
              {...rest}
            />
          )}
        />
      ))}

      <Button
        type="submit"
        size="lg"
        className="mt-4"
        color="primary"
        isDisabled={!!errors.root?.message}
      >
        Cadastrar
      </Button>
    </form>
  );
};
