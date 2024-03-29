"use client";

import { Controller } from "react-hook-form";

import { Button, Input } from "@/components";
import {
  CreateAccountType,
  createAccountFields,
  validationFields,
} from "../../shared";
import { useEffect } from "react";

interface ICreateAccountForm {
  control: any;
  formState: any;
  reset(): any;
  handleSubmit(data: any): React.Dispatch<React.SetStateAction<any>>;
  handleClick(data: CreateAccountType): void;
}

export const CreateAccountForm = ({
  control,
  handleClick,
  handleSubmit,
  reset,
  formState: { errors },
}: ICreateAccountForm) => {
  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <form
      onSubmit={handleSubmit((data: CreateAccountType) => handleClick(data))}
      className="flex flex-col gap-4 mt-9"
    >
      {createAccountFields.map((field) => (
        <Controller
          key={field.id}
          control={control}
          name={field.name as any}
          render={({ fieldState: { error }, field: { ...rest } }) => (
            <Input
              type={field.type}
              size="md"
              placeholder={field.placeholder}
              variant="bordered"
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
      ))}

      <Button
        type="submit"
        size="lg"
        className="mt-4"
        color="primary"
        isDisabled={validationFields(errors)}
      >
        Cadastrar
      </Button>
    </form>
  );
};
