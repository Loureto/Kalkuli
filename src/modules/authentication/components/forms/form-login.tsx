"use client";

import { Button } from "@/components";
import { Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { ButtonEye, Icons } from "..";

export const FormLogin = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <form className="flex flex-col gap-5">
      <Input
        type="email"
        size="sm"
        placeholder="E-mail"
        variant="bordered"
        isInvalid={true}
        startContent={<Icons.MdEmail />}
        // errorMessage="Error message"
      />
      <Input
        type={isVisible ? "text" : "password"}
        size="sm"
        placeholder="Senha"
        variant="bordered"
        isInvalid={true}
        startContent={<Icons.MdLock />}
        endContent={
          <ButtonEye
            isVisible={isVisible}
            handleClick={() => setIsVisible(!isVisible)}
          />
        }
        // errorMessage="Error message"
      />
      <Link className="text-center">Esqueceu a senha?</Link>
      <Button type="submit">Entrar</Button>
    </form>
  );
};
