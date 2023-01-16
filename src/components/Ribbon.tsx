import styles from "../styles/Ribbon.module.scss";

type RibbonProps = {
  line1: string;
  line2: string;
  onClick: () => void;
};

export default function Ribbon({ line1, line2, onClick }: RibbonProps) {
  return (
    <div className={styles.Ribbon}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{line1}</div>
        <div className={styles.link} onClick={onClick}>
          <div className={styles.link} title="바로가기">
            {line2}
          </div>
        </div>
      </div>
    </div>
  );
}
