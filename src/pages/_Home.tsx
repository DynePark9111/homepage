import Info from "../components/Info";
import UserStatusButton from "../components/UserStatusButton";
import { UserStatus } from "../utils/types";
import styles from "../styles/Home.module.scss";
import { getStatusStyle } from "../utils/utils";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Pin from "../components/Pin";
import My from "../components/My";

export default function Home() {
  const { userStatus } = useContext(AppContext);

  return (
    <div className={styles.Home} id={getStatusStyle(userStatus, styles)}>
      <Info type="home" />
      <Pin />
      <div className={styles.wrapper}>
        <UserStatusButton icon={"login"} status={UserStatus.LoggingIn} />
      </div>
      <My /> {/* when logged in */}
    </div>
  );
}
