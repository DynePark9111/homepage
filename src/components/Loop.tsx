import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/Loop.module.scss";

type LoopProps = {
  speed: number;
  direction: "right" | "left";
  children: ReactNode;
};

export default function Loop({ speed, direction, children }: LoopProps) {
  const [loopInstances, setLoopInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;
    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLoopInstances(
        loopInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [loopInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);
    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [loopInstances, setupInstances]);

  return (
    <div className={styles.Loop} ref={outerRef}>
      <div className={styles.loopWrapper} ref={innerRef} data-animate="true">
        {[...Array(loopInstances)].map((_, index) => (
          <div
            key={index}
            className={styles.instance}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
