"use client";

import { routes } from "@/shared";
import { Link, Tab, Tabs } from "@nextui-org/react";
import * as C from "../components";
import { useCreateAccount, useCreateAccountJuridical } from "../hooks";

export const CreateAccountPage = () => {
  return (
    <C.Container>
      <h1 className="text-3xl font-bold text-center mb-10">Cadastrar</h1>
      <p className="text-sm text-custom-grayFootprint text-center mb-5">
        Escolha como deseja se cadastrar.
      </p>

      <Tabs size="lg" fullWidth>
        <Tab key={1} title="Pessoal física">
          <C.CreateAccountForm {...useCreateAccount()} />
        </Tab>
        <Tab key={2} title="Pessoal Juridica">
          <C.CreateAccountJuridicalForm {...useCreateAccountJuridical()} />
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
    </C.Container>
  );
};
