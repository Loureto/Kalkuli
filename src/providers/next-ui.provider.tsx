"use client";

import { NextUIProvider } from "@nextui-org/react";

type NextUIProps = {
  children: React.ReactNode;
};

export const NextThemeProvider = ({ children }: NextUIProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
