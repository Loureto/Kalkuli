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
    <div className="w-full flex flex-col min-h-screen">
      <Sidebar.Mobile />

      <Sidebar.Desktop />

      <div className="relative h-screen flex flex-col lg:pl-72">
        <Header.Desktop />
        <main className="relative flex-1 pt-5 h-full">{children}</main>
      </div>
    </div>
  );
};

export default WithAuthLayout;
