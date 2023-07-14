import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthtContext {
  isAuthenticated: boolean;
  login: (email: string) => void;
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
  const [isAuthenticated, setisAuthenticated] = useState(Boolean(localStorage.getItem("user-email")));
  const navigate = useNavigate();

  const login = async (email: string) => {
    setisAuthenticated(true)
    localStorage.setItem("user-email", email);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user-email");
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