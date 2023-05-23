import { createContext, useState } from "react";
export const ModeContext = createContext();
export const UserContext = createContext();

export const ProviderMode = ({ children }) => {
  const [mode, setMode] = useState("");
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const ProviderUser = ({ children }) => {
  const [user, setUser] = useState({ name: "Alex", age: "" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};