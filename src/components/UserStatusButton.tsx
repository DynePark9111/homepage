import styles from "../styles/UserStatusButton.module.scss";

import { useContext } from "react";
import { UserStatus } from "../utils/types";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AppContext } from "../contexts/AppContext";
import { getStatusStyle } from "../utils/utils";

export default function UserStatusButton({
  icon,
  status,
}: UserStatusButtonProps) {
  const { userStatus, setUserStatus } = useContext(AppContext);

  return (
    <button
      className={styles.UserStatusButton}
      id={getStatusStyle(userStatus, styles)}
      disabled={status === userStatus}
      onClick={() => setUserStatus(status)}
    >
      {icon === "login" && <FiLogIn className={styles.icon} />}
      {icon === "logout" && <FiLogOut className={styles.icon} />}
    </button>
  );
}

type UserStatusButtonProps = {
  icon: string;
  status: UserStatus;
};
