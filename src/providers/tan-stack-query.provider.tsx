"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import Cookies from "js-cookie";

type TanStackQueryProps = {
  children: React.ReactNode;
};

export const TanStackQueryProvider = ({ children }: TanStackQueryProps) => {
  const queryClient = new QueryClient();

  // Cookies.set("token", "token");
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
