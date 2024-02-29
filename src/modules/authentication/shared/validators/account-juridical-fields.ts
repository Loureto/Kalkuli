export const validationJuridicalFields = (errors: any) => {
  const error = true;
  if (errors?.company?.message) return error;
  if (errors?.email?.message) return error;
  if (errors?.cnpj?.message) return error;
  if (errors?.password?.message) return error;
  return !error;
};
