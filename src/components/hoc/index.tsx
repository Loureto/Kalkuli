"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

import { Header } from "..";
import { Sidebar } from "../sidebar";
import { routes } from "@/shared";

const WithAuthLayout = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get("token");
  const router = usePathname();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (token) {
      return setIsAuthenticated(true);
    }
  }, [token]);

  if (!isAuthenticated && router !== routes.home) {
    return (
      <div className="w-full h-full flex flex-col sm:h-screen">
        <Header.Initial />
        <main className="w-full h-full flex flex-col justify-center items-center px-5 sm:px-0">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div>
      <Sidebar.Mobile />

      <Sidebar.Desktop />

      <div className="lg:pl-72">
        <Header.Desktop />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default WithAuthLayout;
