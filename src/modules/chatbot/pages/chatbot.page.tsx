"use client";

import { Textarea } from "@nextui-org/react";
import { MdSend } from "react-icons/md";

export const ChatbotPage = () => {
  return (
    <div className="flex flex-col items-center h-full pb-10">
      <div className="flex-grow w-full"></div>
      <Textarea
        variant="bordered"
        placeholder="Pergunte algo.."
        className="max-w-3xl sticky inset-y-0 min-h-12"
        endContent={<MdSend size={24} />}
      />
    </div>
  );
};
