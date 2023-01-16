import styles from "../styles/MyHeader.module.scss";
import { UserStatus } from "../utils/types";
import Info from "./Info";
import Reminder from "./Reminder";
import UserStatusButton from "./UserStatusButton";

export default function MyHeader() {
  return (
    <header className={styles.MyHeader}>
      <section>
        <Info />
        <Reminder />
      </section>
      <section>
        <UserStatusButton icon="logout" status={UserStatus.LoggedOut} />
      </section>
    </header>
  );
}
