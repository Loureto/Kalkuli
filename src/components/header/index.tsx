"use client";

import Image from "next/image";
import KalkuliIcon from "@/public/icons/kalkuli-medium.svg";

export const Header = () => {
  return (
    <header className="w-full flex justify-center py-6 px-5 sm:px-12">
      <div className="w-full max-w-7xl">
        <Image src={KalkuliIcon} alt="Kalkuli logo" />
      </div>
    </header>
  );
};
