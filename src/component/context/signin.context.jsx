import { createContext, useState, useEffect } from "react";
export const SignContext = createContext();
export const UserProvider = ({ children }) => {
  const [signOptions, setSignoptions] = useState({ name: "uzor" });
  //   const openSignUp = () => setSignoptions(false);
  //   const closeSignUP = () => setSignoptions(true);

  //   const value = { signOptions, setSignoptions };
  return (
    <SignContext.Provider value={{ signOptions, setSignoptions }}>
      {children}
    </SignContext.Provider>
  );
};
