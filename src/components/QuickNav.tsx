import styles from "../styles/QuickNav.module.scss";

export default function QuickNav() {
  return (
    <div className={styles.QuickNav}>
      {NavItems.map((item) => {
        return (
          <div className={styles.navItem}>
            <span className={styles.label}>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

const NavItems = ["A", "B", "C", "D"];
