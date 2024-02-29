export const validationFields = (errors: any) => {
  const error = true;
  if (errors?.name?.message) return error;
  if (errors?.email?.message) return error;
  if (errors?.cpf?.message) return error;
  if (errors?.password?.message) return error;
  return !error;
};
