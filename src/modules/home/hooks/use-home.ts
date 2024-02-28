import { useRouter } from "next/navigation";

export const useHome = () => {
  const router = useRouter();

  const handleClickNavitgate = () => {
    router.push("/create-account");
  };

  return { handleClickNavitgate };
};
