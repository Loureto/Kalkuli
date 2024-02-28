"use client";

import Image from "next/image";
import { Link } from "@nextui-org/react";
import { Button } from "@/components";
import { routes } from "@/shared";
import LogoIcon from "@/public/icons/kalkuli.svg";
import { useHome } from "../hooks";

export const HomePage = () => {
  const { handleClickNavigateToLogin } = useHome();
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-40% from-custom-accentGreen to-custom-lightYellow">
      <Image className="mb-24" src={LogoIcon} alt="Kalkuli" />

      <section className="flex flex-col sm:max-w-80 xl:max-w-96 items-center gap-6">
        <p className="text-base leading-7 text-center font-medium text-gray-100">
          Seja bem-vindo a inteligência especialista em contabilidade.
        </p>

        <Button
          fullWidth
          size="lg"
          color="secondary"
          onClick={handleClickNavigateToLogin}
        >
          Ir para login
        </Button>

        <Link
          href={routes.createAccount}
          className="text-white w-fit text-sm font-medium underline"
        >
          Cadastra-se
        </Link>
      </section>
    </main>
  );
};
