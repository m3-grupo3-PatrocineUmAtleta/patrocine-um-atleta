import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iResponseAddress } from "../../services/getAddress";
import { iRegisterData, UserRegister } from "../../services/userRegister";
import { iContext, iProviderProps, iUser, iAthlete } from "./interfaces";

interface iContext {
  user: iUser | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  buttonValue: string;
  setButtonValue: React.Dispatch<React.SetStateAction<string>>;
  registerUser: (data: iRegisterData) => void;
  address: iResponseAddress | null;
  setAddress: React.Dispatch<React.SetStateAction<iResponseAddress | null>>;
}

interface iProviderProps {
  children: React.ReactNode;
}

interface iUser {}

export const UserContext = createContext({} as iContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const [allAthletes, setAllAthletes] = useState([] as iAthlete[]);
  const [address, setAddress] = useState<iResponseAddress | null>(null);
  const navigate = useNavigate();

  const registerUser = async (data: iRegisterData) => {
    const response = await UserRegister(data);

    if (response === 201) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        setIsLoading,
        buttonValue,
        setButtonValue,
        allAthletes,
        setAllAthletes,
        registerUser,
        setAddress,
        address,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
