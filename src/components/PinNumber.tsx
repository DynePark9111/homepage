import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "../styles/PinNumber.module.scss";
import { getStatusStyle } from "../utils/utils";

type PinNumberProps = {
  focused: boolean;
  value: string;
};

export default function PinNumber({ value, focused }: PinNumberProps) {
  const { userStatus } = useContext(UserContext);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (value) {
      const timeout = setTimeout(() => {
        setHidden(true);
      }, 500);

      return () => {
        setHidden(false);
        clearTimeout(timeout);
      };
    }
  }, [value]);

  return (
    <div
      className={`${styles.PinNumber} ${focused && styles.focused} ${
        hidden && styles.hidden
      }`}
      id={getStatusStyle(userStatus, styles)}
    >
      <span className={styles.digit}>{value || ""}</span>
    </div>
  );
}
