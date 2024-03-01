"use client";

import Cookies from "js-cookie";
import React from "react";
import { Header } from "..";

import { routes } from "@/shared";
import { usePathname } from "next/navigation";
import { Example } from "../sidebar";

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
        <Header />
        <main className="w-full h-full flex flex-col justify-center items-center px-5 sm:px-0">
          {children}
        </main>
      </div>
    );
  }

  return <Example />;
};

export default WithAuthLayout;
