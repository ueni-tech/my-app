import { Dispatch, SetStateAction, createContext, useState } from "react";
import { User } from "../types/api/user";

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
}

const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: React.ReactNode; }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
}