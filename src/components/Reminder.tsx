import styles from "../styles/Reminder.module.scss";
import { FiBell } from "react-icons/fi";

export default function Reminder() {
  return (
    <div className={styles.Reminder}>
      <FiBell className={styles.icon} />
      <span className={styles.text}>Walk the dog</span>
      <span className={styles.time}>10PM</span>
    </div>
  );
}
