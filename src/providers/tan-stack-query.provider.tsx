import { QueryClient, QueryClientProvider } from "react-query";

type TanStackQueryProps = {
  children: React.ReactNode;
};

export const TanStackQueryProvider = ({ children }: TanStackQueryProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
