import styles from "../styles/QuickNav.module.scss";

export default function QuickNav() {
  return (
    <div className={styles.QuickNav}>
      {NavItems.map((item) => {
        return (
          <div className={styles.navItem} key={item}>
            <span className={styles.label}>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

const NavItems = ["Weather", "Projects", "Youtube", "Photos"];
