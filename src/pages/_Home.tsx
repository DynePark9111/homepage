import Background from "../components/Background";
import Info from "../components/Info";
import UserStatusButton from "../components/UserStatusButton";
import { UserStatus } from "../utils/types";
import styles from "../styles/Home.module.scss";
import { getStatusStyle } from "../utils/utils";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Pin from "../components/Pin";

export default function Home() {
  const { userStatus } = useContext(AppContext);

  return (
    <div className={styles.Home} id={getStatusStyle(userStatus, styles)}>
      <Info id="appInfo" />
      <Background />
      <Pin />
      <div className={styles.wrapper}>
        <UserStatusButton status={UserStatus.LoggingIn} />
      </div>
    </div>
  );
}
