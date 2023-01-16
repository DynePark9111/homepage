import Hero from "../components/Hero";
import styles from "../styles/pages/_NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.NotFound}>
      <Hero
        title="Sorry!"
        title2="Page is not available."
        sub="404 NOT FOUND"
      />
    </div>
  );
}
