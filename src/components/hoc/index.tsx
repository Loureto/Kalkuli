"use client";

import Cookies from "js-cookie";
import React from "react";
import { Header } from "..";

import { routes } from "@/shared";
import { usePathname } from "next/navigation";

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
      <div className="w-full h-screen flex flex-col items-center">
        <Header />
        <main className="w-full h-full flex justify-center items-center px-5 sm:px-0">
          {children}
        </main>
      </div>
    );
  }

  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default WithAuthLayout;
