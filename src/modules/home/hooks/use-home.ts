import { useRouter } from "next/navigation";
import { routes } from "@/shared";

export const useHome = () => {
  const router = useRouter();

  const handleClickNavigateToLogin = () => {
    router.push(routes.login);
  };

  return { handleClickNavigateToLogin };
};
