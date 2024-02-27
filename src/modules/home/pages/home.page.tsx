"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#5BC046] to-[#F2FF56]">
      <h1 className="mb-24 text-white text-[2.125rem]">Kalkuli</h1>
      <section className="flex flex-col max-w-80 text-center gap-6">
        <p className="text-base font-medium text-white">
          Seja bem-vindo a inteligência especialista em contabilidade.
        </p>
        <Button>Entrar</Button>
        <Link href="/" className="text-white text-sm font-medium">
          Cadastrar
        </Link>
      </section>
    </div>
  );
};
