"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAccountSchema, CreateAccountType } from "../shared";
import { useForm } from "react-hook-form";

const initialState = {
  name: "",
  email: "",
  cpf: "",
  password: "",
};

export const useCreateAccount = () => {
  const { control, handleSubmit, formState, reset } =
    useForm<CreateAccountType>({
      defaultValues: { ...initialState },
      mode: "onBlur",
      resolver: zodResolver(CreateAccountSchema),
    });

  const handleCreateAccount = (data: CreateAccountType) => {
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
