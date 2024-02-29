"use client";

import { routes } from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Tabs, Tab, CardBody, Card } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { FormLogin } from "../components";
import { FormLoginData, formLoginSchema } from "../shared";
import { CreateAccountForm } from "../components/forms/create-account-form";
import { CreateAccountEmpresa } from "../components/forms/create-account-empresa";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full sm:max-w-80 xl:max-w-96">
      {children}
    </main>
  );
};

export const CreateAccountPage = () => {
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
      <h1 className="text-3xl font-bold text-center mb-10">Cadastrar</h1>
      <p className="text-sm text-custom-grayFootprint text-center mb-5">
        Escolha como deseja se cadastrar.
      </p>

      <Tabs size="lg" fullWidth>
        <Tab key={1} title="Pessoal física">
          <CreateAccountForm />
        </Tab>
        <Tab key={2} title="Pessoal Juridica">
          <CreateAccountEmpresa />
        </Tab>
      </Tabs>

      <p className="w-full flex mt-5 text-[11px]">
        Ao me cadastrar declaro que concordo com os
        <Link
          href={routes.createAccount}
          className="underline ml-0.5 text-[11px] text-custom-accentGreen cursor-pointer"
        >
          Temos e Privacidade
        </Link>
      </p>
    </Container>
  );
};
