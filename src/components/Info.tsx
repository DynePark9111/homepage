import styles from "../styles/Info.module.scss";
import useCurrentDate from "../hooks/useCurrentDate";
import { useContext, useState } from "react";
import { FaSun } from "react-icons/fa";
import { T, N, getStatusStyle } from "../utils/utils";
import { AppContext } from "../contexts/AppContext";

export default function Info({ id }: InfoProps) {
  const { userStatus } = useContext(AppContext);

  function getId(id: string) {
    switch (id) {
      case "appInfo":
        return styles.appInfo;
      default:
        return "";
    }
  }

  return (
    <div
      className={`${styles.Info} ${getId(id)}`}
      id={getStatusStyle(userStatus, styles)}
    >
      <Time />
      <Weather />
    </div>
  );
}

function Time() {
  const date: Date = useCurrentDate();
  return <span className={styles.Time}>{T.format(date)}</span>;
}

function Weather() {
  const [temperature] = useState<number>(N.rand(-10, 10));
  return (
    <span className={styles.Weather}>
      <FaSun className={`${styles.type} ${styles.icon}`} />
      <span className={styles.value}>{temperature}</span>
      <span className={styles.unit}>°C</span>
    </span>
  );
}

type InfoProps = {
  id: string;
};
