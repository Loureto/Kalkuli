import { routes } from "@/constants";
import { useRouter } from "next/navigation";

export const useHome = () => {
  const router = useRouter();

  const handleClickNavigateToLogin = () => {
    router.push(routes.login);
  };

  return { handleClickNavigateToLogin };
};
