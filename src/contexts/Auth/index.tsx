import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


interface User {
  id: string;
  username: string;
  name: string;
}

interface AuthtContext {
  user?: User;
  login: (data: any) => void;
  logout: () => void;
}
interface AuthtContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthtContext>({
  user: undefined,
  login: () => null,
  logout: () => null
});


export const AuthProvider = ({ children }: AuthtContextProps) => {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: User) => {
    setUser(data);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(undefined);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};