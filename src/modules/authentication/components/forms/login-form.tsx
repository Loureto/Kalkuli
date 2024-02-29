"use client";

import { Button, Input } from "@/components";
import { Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { ButtonEye, Icons } from "..";
import { LoginFormType } from "../../shared";

interface ILoginForm {
  control: any;
  formState: any;
  reset(): any;
  handleSubmit(data: any): React.Dispatch<React.SetStateAction<any>>;
  handleClick(data: LoginFormType): void;
}

export const LoginForm = ({
  control,
  reset,
  handleClick,
  handleSubmit,
  formState: { errors },
}: ILoginForm) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <form
      onSubmit={handleSubmit((data: LoginFormType) => handleClick(data))}
      className="flex flex-col gap-4"
    >
      <Controller
        control={control}
        name="email"
        render={({ fieldState: { error }, field: { ...rest } }) => (
          <Input
            type="email"
            size="md"
            placeholder="E-mail"
            variant="bordered"
            isInvalid={!!error?.message}
            startContent={<Icons.MdEmail />}
            errorMessage={error?.message}
            {...rest}
          />
        )}
      />

      <div className="w-full flex flex-col gap-1">
        <Link className="w-fit text-custom-dark underline ml-auto cursor-pointer">
          Esqueceu a senha?
        </Link>
        <Controller
          control={control}
          name="password"
          render={({ fieldState: { error }, field: { ...rest } }) => {
            return (
              <Input
                type={isVisible ? "text" : "password"}
                size="md"
                placeholder="Senha"
                variant="bordered"
                isInvalid={!!error?.message}
                startContent={<Icons.MdLock />}
                endContent={
                  <ButtonEye
                    isVisible={isVisible}
                    handleClick={() => setIsVisible(!isVisible)}
                  />
                }
                errorMessage={error?.message}
                {...rest}
              />
            );
          }}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-4"
        color="primary"
        isDisabled={!!errors.email || !!errors.password}
      >
        Entrar
      </Button>
    </form>
  );
};
