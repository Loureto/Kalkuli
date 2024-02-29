"use client";

import { useForm } from "react-hook-form";
import { LoginFormType, LoginFormSchema } from "../shared";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLogin = () => {
  const { control, handleSubmit, formState, reset } = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(LoginFormSchema),
  });

  const handleClickLogin = (data: LoginFormType) => {
    console.log(data);
  };

  return {
    control,
    formState,
    reset,
    handleSubmit,
    handleClick: handleClickLogin,
  };
};
