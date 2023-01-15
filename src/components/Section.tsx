import { ReactNode } from "react";
import styles from "../styles/Section.module.scss";

export default function Section({ icon, title, children }: SectionProps) {
  return (
    <section className={styles.Section}>
      <header className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.text}>{title}</span>
      </header>
      {children}
    </section>
  );
}

type SectionProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};
