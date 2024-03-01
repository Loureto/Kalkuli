"use client";

import { Avatar } from "@nextui-org/react";

interface IPerfil {
  name: string;
  avatar?: string;
}

export const PerfilSidebar = ({ name, avatar }: IPerfil) => {
  return (
    <li className="-mx-6 mt-auto sticky bottom-0 z-10 bg-gray-50">
      <a
        href="#"
        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800/5"
      >
        <Avatar showFallback name={name} src={avatar} />

        <span className="sr-only">Your profile</span>
        <span aria-hidden="true" className="text-neutral-900">
          {name}
        </span>
      </a>
    </li>
  );
};
