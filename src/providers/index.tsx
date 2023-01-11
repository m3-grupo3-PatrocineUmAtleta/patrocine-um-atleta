import { UserProvider } from "./User";

interface iProvidersProps {
  children: React.ReactNode;
}

//comentarios
//somente um context
export const Providers = ({ children }: iProvidersProps) => {
  return <UserProvider>{children}</UserProvider>;
};
