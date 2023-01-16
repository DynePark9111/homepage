import { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import styles from "../styles/Loading.module.scss";
import { getStatusStyle } from "../utils/utils";

export default function Loading() {
  const { userStatus } = useContext(UserContext);

  return (
    <div className={styles.Loading} id={getStatusStyle(userStatus, styles)}>
      <FaSpinner />
    </div>
  );
}
