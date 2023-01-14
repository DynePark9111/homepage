import styles from "../styles/Hero.module.scss";

type HeroProps = {
  title: string;
  title2: string;
  sub: string;
  sub2?: string;
};

export default function Hero({ title, title2, sub, sub2 }: HeroProps) {
  return (
    <div className={styles.Hero}>
      <h1>
        <div>{title}</div>
        <div>{title2}</div>
      </h1>
      <p>
        {sub}
        <br />
        {sub2}
      </p>
    </div>
  );
}
