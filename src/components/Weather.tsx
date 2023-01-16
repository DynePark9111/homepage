import styles from "../styles/Weather.module.scss";
import Section from "./Section";
import { FaBolt, FaCloud, FaCloudRain, FaSun } from "react-icons/fa";
import { N } from "../utils/utils";
import { forwardRef, ReactNode } from "react";

export default forwardRef(function Weather() {
  return (
    <Section title="Weather" icon={<FaSun />}>
      <div className={styles.Weather}>
        {days.map((day) => {
          return (
            <DayCard
              key={day.id}
              temp={day.temp}
              name={day.name}
              icon={day.weather}
            />
          );
        })}
      </div>
    </Section>
  );
});

function DayCard({ temp, icon, name }: DayCardProps) {
  return (
    <div className={styles.DayCard}>
      <div className={styles.content}>
        <span className={styles.temp}>
          <span className={styles.value}>{temp}</span>
          <span className={styles.unit}>°C</span>
        </span>
        <div className={styles.icon}>{icon}</div>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
}

type DayCardProps = {
  temp: number;
  name: string;
  icon: ReactNode;
};

const days = [
  {
    id: 1,
    name: "Mon",
    temp: N.rand(-10, 10),
    weather: <FaSun className={styles.sun} />,
  },
  {
    id: 2,
    name: "Tues",
    temp: N.rand(-10, 10),
    weather: <FaSun className={styles.sun} />,
  },
  {
    id: 3,
    name: "Wed",
    temp: N.rand(-10, 10),
    weather: <FaCloud className={styles.cloud} />,
  },
  {
    id: 4,
    name: "Thurs",
    temp: N.rand(-10, 10),
    weather: <FaCloudRain className={styles.rain} />,
  },
  {
    id: 5,
    name: "Fri",
    temp: N.rand(-10, 10),
    weather: <FaBolt className={styles.bolt} />,
  },
  {
    id: 6,
    name: "Sat",
    temp: N.rand(-10, 10),
    weather: <FaSun className={styles.sun} />,
  },
  {
    id: 7,
    name: "Sun",
    temp: N.rand(-10, 10),
    weather: <FaCloud className={styles.cloud} />,
  },
];
