"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components";
import LogoIcon from "@/public/icons/logo.svg";

export const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-40% from-[#5BC046] to-[#F2FF56]">
      <Image className="mb-24" src={LogoIcon} alt="Kalkuli" />

      <section className="flex flex-col max-w-80 text-center gap-6">
        <p className="text-base leading-[27px] font-medium text-[#D0FFC5]">
          Seja bem-vindo a inteligência especialista em contabilidade.
        </p>

        <Button className="text-[#5BC046] bg-white text-medium">Entrar</Button>
        <Link href="/home" className="text-white text-sm font-medium">
          Cadastrar
        </Link>
      </section>
    </div>
  );
};
