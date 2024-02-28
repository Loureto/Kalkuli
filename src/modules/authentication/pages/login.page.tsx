"use client";

import { FormLogin } from "../components";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex flex-col max-w-80">{children}</main>;
};

export const LoginPage = () => {
  return (
    <Container>
      <FormLogin />
    </Container>
  );
};
