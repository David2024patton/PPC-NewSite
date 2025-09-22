import React, { createContext, useState, useContext, useEffect } from "react";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(loggedIn);
  }, []);

  const login = () => {
    localStorage.setItem("isAdmin", "true");
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  const value = {
    isAdmin,
    login,
    logout,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
