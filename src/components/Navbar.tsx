import styles from "../styles/Navbar.module.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Link to="/">
        <Logo />
      </Link>
    </nav>
  );
}
