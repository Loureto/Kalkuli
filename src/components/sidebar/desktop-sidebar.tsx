import Image from "next/image";

import { PlusIcon } from "@heroicons/react/20/solid";
import Logo from "@/public/icons/logo.svg";
import { ListOfItems, PerfilSidebar } from "./items";

export const SiderbarDesktop = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 border-r px-6 pb-4 scroll-">
        <div className="-mx-2 sticky top-3 z-10 bg-gray-50 flex items-center justify-between cursor-pointer py-1">
          <div className="flex gap-2 items-center">
            <Image className="h-10 w-auto" src={Logo} alt="Logo" />
            <p className="text-sm font-medium">Novo chat</p>
          </div>
          <PlusIcon className="h-6 w-6 text-neutral-900" />
        </div>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <ListOfItems data={[]} sectionName="Últimas pesquisas" />

            <PerfilSidebar
              name="Tom"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};
