"use client";

import { routes } from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { FormLogin } from "../components";
import { FormLoginData, formLoginSchema } from "../shared";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full sm:max-w-80 xl:max-w-96">
      {children}
    </main>
  );
};

export const LoginPage = () => {
  const { control, handleSubmit, formState } = useForm<FormLoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(formLoginSchema),
  });

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-10 text-center">
        Bem-vindo de volta
      </h1>

      <FormLogin
        control={control}
        formState={formState}
        handleSubmit={handleSubmit}
      />

      <p className="text-center mt-5">
        Ainda não tenho conta?{" "}
        <Link
          href={routes.createAccount}
          className="underline text-custom-accentGreen cursor-pointer"
        >
          {" "}
          Cadastra-se
        </Link>
      </p>

      <div className="flex w-full items-baseline gap-4 mt-8 mb-5">
        <hr className="w-full border-1" />
        <span className="text-sm text-custom-dark">Ou</span>
        <hr className="w-full border-1" />
      </div>
    </Container>
  );
};
