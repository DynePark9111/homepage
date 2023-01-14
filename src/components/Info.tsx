import styles from "../styles/Info.module.scss";
import useCurrentDate from "../hooks/useCurrentDate";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { T, N } from "../utils/utils";

type InfoProps = {
  id: string;
};

export default function Info({ id }: InfoProps) {
  return (
    <div className={styles.logout}>
      <div className={styles.Info} id={id === "appInfo" ? styles.appInfo : ""}>
        <Time />
        <Weather />
      </div>
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
