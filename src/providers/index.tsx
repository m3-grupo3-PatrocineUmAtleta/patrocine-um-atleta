import { UserProvider } from "./User";

interface iProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => {
  return <UserProvider>{children}</UserProvider>;
};
