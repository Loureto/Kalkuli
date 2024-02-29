"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateAccountJuridicalSchema,
  CreateAccountJuridicalType,
} from "../shared";
import { useEffect } from "react";

const initialState = {
  company: "",
  email: "",
  cnpj: "",
  password: "",
};

export const useCreateAccountJuridical = () => {
  const { control, handleSubmit, formState, reset } =
    useForm<CreateAccountJuridicalType>({
      defaultValues: { ...initialState },
      mode: "onBlur",
      resolver: zodResolver(CreateAccountJuridicalSchema),
    });

  const handleCreateAccount = (data: CreateAccountJuridicalType) => {
    console.log(data);
  };

  return {
    control,
    formState,
    reset,
    handleSubmit,
    handleClick: handleCreateAccount,
  };
};
