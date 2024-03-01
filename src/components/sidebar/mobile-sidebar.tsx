"use client";

import { Fragment } from "react";
import Image from "next/image";

import Logo from "@/public/icons/logo.svg";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";

import { useSidebarStore } from "@/shared";
import { ButtonActionSidebar } from "../button-add-new-chat/inde";
import { ListOfItems } from "../list-of-items";
import { PerfilSidebar } from "../perfil";

export const SidebarMobile = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <ButtonActionSidebar
                    onClick={() => setSidebarOpen(false)}
                    icon={
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    }
                  />
                </div>
              </Transition.Child>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 px-6 pb-4">
                <div className="-mx-2 sticky top-3 z-10 bg-gray-50 flex items-center justify-between cursor-pointer py-1">
                  <div className="flex gap-2 items-center">
                    <Image className="h-10 w-auto" src={Logo} alt="Logo" />
                    <p className="text-sm font-medium">Novo chat</p>
                  </div>
                  <PlusIcon className="h-6 w-6 text-neutral-900" />
                </div>

                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col">
                    <ListOfItems data={[]} sectionName="Últimas pesquisas" />

                    <PerfilSidebar
                      name="Tom"
                      avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    />
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
