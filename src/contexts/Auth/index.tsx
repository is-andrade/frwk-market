import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthtContext {
  isAuthenticated: boolean;
  login: (data: any) => void;
  logout: () => void;
}
interface AuthtContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthtContext>({
  isAuthenticated: false,
  login: () => null,
  logout: () => null
});


export const AuthProvider = ({ children }: AuthtContextProps) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (data: User) => {
    setisAuthenticated(true)
    navigate("/");
  };

  const logout = () => {
    setisAuthenticated(false);
    navigate("/login", { replace: true });
  };

  const value = {
      login,
      logout,
      isAuthenticated
    };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};