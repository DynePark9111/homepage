import styles from "../styles/UserStatusButton.module.scss";

import { useContext } from "react";
import { UserStatus } from "../utils/types";
import { FiLogIn } from "react-icons/fi";
import { AppContext } from "../contexts/AppContext";

export default function UserStatusButton({ status }: UserStatusButtonProps) {
  const { userStatus, setUserStatus } = useContext(AppContext);

  return (
    <button
      className={styles.UserStatusButton}
      id={styles.signIn}
      disabled={status === userStatus}
      onClick={() => setUserStatus(status)}
    >
      <FiLogIn className={styles.icon} />
    </button>
  );
}

type UserStatusButtonProps = {
  status: UserStatus;
};
