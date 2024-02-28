"use client";

import { useState } from "react";
import { ButtonEye, Icons } from "..";
import { Link } from "@nextui-org/react";
import { Button, Input } from "@/components";

export const FormLogin = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        size="md"
        placeholder="E-mail"
        variant="bordered"
        // isInvalid={true}
        startContent={<Icons.MdEmail />}
      />
      <div className="w-full flex flex-col gap-1">
        <Link className="w-fit text-custom-dark underline ml-auto cursor-pointer">
          Esqueceu a senha?
        </Link>
        <Input
          type={isVisible ? "text" : "password"}
          size="md"
          placeholder="Senha"
          variant="bordered"
          // isInvalid={true}
          startContent={<Icons.MdLock />}
          endContent={
            <ButtonEye
              isVisible={isVisible}
              handleClick={() => setIsVisible(!isVisible)}
            />
          }
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-4"
        color="primary"
        isDisabled
      >
        Entrar
      </Button>
    </form>
  );
};
