import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/Main.module.scss";
import { UserStatus } from "../utils/types";
import { getStatusStyle } from "../utils/utils";
import Info from "./Info";
import Projects from "./Projects";
import QuickNav from "./QuickNav";
import Reminder from "./Reminder";
import UserStatusButton from "./UserStatusButton";
import Weather from "./Weather";
import Youtube from "./Youtube";

export default function Main() {
  const { userStatus } = useContext(AppContext);

  return (
    <div className={styles.Main} id={getStatusStyle(userStatus, styles)}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <header className={styles.mainHeader}>
            <section>
              <Info />
              <Reminder />
            </section>
            <section>
              <UserStatusButton icon="logout" status={UserStatus.LoggedOut} />
            </section>
          </header>
          <QuickNav />
          <Weather />
          <Projects />
          <Youtube />
        </div>
      </div>
    </div>
  );
}
