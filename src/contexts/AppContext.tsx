import { createContext, useState } from "react";
import { childrenProps, UserStatus } from "../utils/types";

type AppContext = {
  userStatus: UserStatus;
  setUserStatus: (status: UserStatus) => void;
};

export const AppContext = createContext({} as AppContext);

export default function AppContextProvider({ children }: childrenProps) {
  const [userStatus, setUserStatusTo] = useState(UserStatus.LoggedOut);

  function setUserStatus(status: UserStatus) {
    setUserStatusTo(status);
  }

  return (
    <AppContext.Provider value={{ userStatus, setUserStatus }}>
      {children}
    </AppContext.Provider>
  );
}
