import Hero from "../components/Hero";
import styles from "../styles/Maintenance.module.scss";

export default function Maintenance() {
  return (
    <div className={styles.Maintenance}>
      <Hero
        title="Website"
        title2="Under Construction"
        sub="Sorry for keep you waiting."
        sub2="I'll be back. Please check back soon."
      />
    </div>
  );
}
