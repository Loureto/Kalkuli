"use client";

import { NextUIProvider } from "@nextui-org/react";

type NextUIProviderProps = {
  children: React.ReactNode;
};

export const NextThemeProvider = ({ children }: NextUIProviderProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
