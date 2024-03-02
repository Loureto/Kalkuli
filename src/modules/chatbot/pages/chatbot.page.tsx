"use client";

import { Input } from "@/components";
import { Textarea } from "@nextui-org/react";
import { MdSend } from "react-icons/md";

export const ChatbotPage = () => {
  return (
    <div className="flex flex-col items-center h-full pb-10">
      <div className="flex flex-col flex-grow w-full items-center justify-center">
        <h1 className="text-4xl text-custom-accentGreen font-medium">
          Bem-vindo.
        </h1>
        <p className="text-lg font-medium text-custom-grayFootprint">
          Como posso te auxiliar?
        </p>
      </div>
      <Input
        variant="bordered"
        placeholder="Pergunte algo.."
        className="max-w-3xl sticky inset-y-0 min-h-12"
        endContent={<MdSend size={24} />}
      />
    </div>
  );
};
