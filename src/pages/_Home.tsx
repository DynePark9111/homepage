import Background from "../components/Background";
import Info from "../components/Info";
import UserStatusButton from "../components/UserStatusButton";
import { UserStatus } from "../utils/types";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Info id="appInfo" />
      <Background />
      <div className={styles.wrapper}>
        <UserStatusButton status={UserStatus.LoggingIn} />
      </div>
    </div>
  );
}
