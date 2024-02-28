"use client";

import Image from "next/image";
import { Link } from "@nextui-org/react";
import { Button } from "@/components";
import { routes } from "@/constants";
import LogoIcon from "@/public/icons/logo.svg";
import { useHome } from "../hooks";

export const HomePage = () => {
  const { handleClickNavigateToLogin } = useHome();
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-40% from-custom-accentGreen to-custom-lightYellow">
      <Image className="mb-24" src={LogoIcon} alt="Kalkuli" />

      <section className="flex flex-col max-w-80 items-center gap-6">
        <p className="text-base leading-[27px] text-center font-medium text-custom-brightGreen">
          Seja bem-vindo a inteligência especialista em contabilidade.
        </p>

        <Button
          className="text-[#5BC046] bg-white w-full text-medium"
          onClick={handleClickNavigateToLogin}
        >
          Entrar
        </Button>

        <Link
          href={routes.createAccount}
          className="text-white w-fit text-sm font-medium"
        >
          Cadastrar
        </Link>
      </section>
    </main>
  );
};
