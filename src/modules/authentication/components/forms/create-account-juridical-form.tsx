"use client";

import { Controller } from "react-hook-form";

import { Button, Input } from "@/components";
import {
  CreateAccountJuridicalType,
  createAccountJuridicalFields,
  validationJuridicalFields,
} from "../../shared";
import { useEffect } from "react";

interface IFormCreateAccountJuridical {
  control: any;
  formState: any;
  reset(): any;
  handleSubmit(data: any): React.Dispatch<React.SetStateAction<any>>;
  handleClick(data: CreateAccountJuridicalType): void;
}

export const CreateAccountJuridicalForm = ({
  control,
  handleClick,
  handleSubmit,
  reset,
  formState: { errors },
}: IFormCreateAccountJuridical) => {
  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <form
      onSubmit={handleSubmit((data: CreateAccountJuridicalType) =>
        handleClick(data)
      )}
      className="flex flex-col gap-4 mt-9"
    >
      {createAccountJuridicalFields.map((field) => (
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
        isDisabled={validationJuridicalFields(errors)}
      >
        Cadastrar
      </Button>
    </form>
  );
};
