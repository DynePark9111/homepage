import { createContext, useState } from "react";
import { childrenProps, UserStatus } from "../utils/types";

type UserContext = {
  userStatus: UserStatus;
  setUserStatus: (status: UserStatus) => void;
};

export const UserContext = createContext({} as UserContext);

export default function UserContextProvider({ children }: childrenProps) {
  const [userStatus, setUserStatusTo] = useState(UserStatus.LoggedOut);

  function setUserStatus(status: UserStatus) {
    setUserStatusTo(status);
  }

  return (
    <UserContext.Provider value={{ userStatus, setUserStatus }}>
      {children}
    </UserContext.Provider>
  );
}
