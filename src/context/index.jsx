"use client";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();


export default function GlobalState({ children }) {

  const [isAuthUser, setAuthUser] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setAuthUser(true);
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    } else {
      setAuthUser(false);
    }
  }, [Cookies]);
  return (
    <GlobalContext.Provider
      value={{
        isAuthUser,
        setAuthUser,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
