import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "../styles/Background.module.scss";
import { UserStatus } from "../utils/types";
import { getStatusStyle } from "../utils/utils";

export default function Background() {
  const { userStatus, setUserStatus } = useContext(UserContext);
  function onClick() {
    userStatus === UserStatus.LoggedOut && setUserStatus(UserStatus.LoggingIn);
  }
  return (
    <div
      className={styles.Background}
      id={getStatusStyle(userStatus, styles)}
      onClick={onClick}
    >
      <div className={styles.bgImage} />
    </div>
  );
}
