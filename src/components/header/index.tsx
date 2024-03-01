"use client";

import Image from "next/image";
import KalkuliIcon from "@/public/icons/kalkuli-medium.svg";
import { Button } from "..";
import { ButtonActionSidebar } from "../sidebar/items";
import { Bars3Icon, PlusIcon } from "@heroicons/react/20/solid";
import { useSidebarStore } from "@/shared";

const HeaderInitial = () => {
  return (
    <header className="sticky top-0 z-10 w-full flex justify-center bg-white py-6 px-5 sm:px-12">
      <div className="w-full max-w-7xl">
        <Image src={KalkuliIcon} alt="Kalkuli logo" />
      </div>
    </header>
  );
};

const HeaderDesktop = () => {
  const { setSidebarOpen } = useSidebarStore();
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-4 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex gap-4">
        <ButtonActionSidebar
          onClick={() => setSidebarOpen(true)}
          icon={<Bars3Icon className="h-6 w-6" aria-hidden="true" />}
        />

        <Image src={KalkuliIcon} alt="Kalkuli" />
      </div>

      <Button color="primary" onClick={() => {}}>
        <PlusIcon className="w-5 h-5 text-white" />
        Novo chat
      </Button>
    </div>
  );
};

export const Header = {
  Initial: HeaderInitial,
  Desktop: HeaderDesktop,
};
