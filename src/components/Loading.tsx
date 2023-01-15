import { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/Loading.module.scss";
import { getStatusStyle } from "../utils/utils";

export default function Loading() {
  const { userStatus } = useContext(AppContext);

  return (
    <div className={styles.Loading} id={getStatusStyle(userStatus, styles)}>
      <FaSpinner />
    </div>
  );
}
