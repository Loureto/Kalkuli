"use client";

import Image from "next/image";
import KalkuliIcon from "@/public/icons/kalkuli-medium.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full flex justify-center bg-white py-6 px-5 sm:px-12">
      <div className="w-full max-w-7xl">
        <Image src={KalkuliIcon} alt="Kalkuli logo" />
      </div>
    </header>
  );
};
