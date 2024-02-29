export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full sm:max-w-80 xl:max-w-96">
      {children}
    </main>
  );
};
