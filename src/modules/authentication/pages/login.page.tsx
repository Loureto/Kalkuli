"use client";

import { routes } from "@/shared";
import { Link } from "@nextui-org/react";
import { Container, LoginForm } from "../components";
import { useLogin } from "../hooks";

export const LoginPage = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-10 text-center">
        Bem-vindo de volta
      </h1>

      <LoginForm {...useLogin()} />

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
