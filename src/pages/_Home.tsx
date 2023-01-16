import Info from "../components/Info";
import UserStatusButton from "../components/UserStatusButton";
import { UserStatus } from "../utils/types";
import styles from "../styles/pages/_Home.module.scss";
import { getStatusStyle } from "../utils/utils";
import { useContext } from "react";
import Pin from "../components/Pin";
import My from "../components/My";
import { UserContext } from "../contexts/UserContext";

export default function Home() {
  const { userStatus } = useContext(UserContext);

  return (
    <div className={styles._Home} id={getStatusStyle(userStatus, styles)}>
      <Info type="home" />
      <Pin />
      <div className={styles.wrapper}>
        <UserStatusButton icon={"login"} status={UserStatus.LoggingIn} />
      </div>
      <My /> {/* when logged in */}
    </div>
  );
}
