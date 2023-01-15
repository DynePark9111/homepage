import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/Main.module.scss";
import { UserStatus } from "../utils/types";
import { getStatusStyle } from "../utils/utils";
import Info from "./Info";
import QuickNav from "./QuickNav";
import Reminder from "./Reminder";
import UserStatusButton from "./UserStatusButton";

export default function Main() {
  const { userStatus } = useContext(AppContext);

  return (
    <div className={styles.Main} id={getStatusStyle(userStatus, styles)}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <header>
            <section>
              <Info />
              <Reminder />
            </section>
            <section>
              <UserStatusButton icon="logout" status={UserStatus.LoggedOut} />
            </section>
          </header>
          <QuickNav />
          {/* <contents /> */}
        </div>
      </div>
    </div>
  );
}
