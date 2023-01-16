import { FaBriefcase } from "react-icons/fa";
import styles from "../styles/Projects.module.scss";
import { openGithub } from "../utils/utils";
import Section from "./Section";
import poker from "../assets/projects/poker.png";
import mise from "../assets/projects/mise.png";
import todo from "../assets/projects/todo.png";
import web from "../assets/projects/webtoons.png";

export default function Projects() {
  return (
    <Section icon={<FaBriefcase />} title="Projects">
      <div className={styles.Projects}>
        <Project
          title="Poker"
          desc="#Live #React #Express #Mongodb"
          image={poker}
          link="poker"
        />
        <Project
          title="Webtoons"
          desc="#Nextjs #Express #Mongodb"
          image={web}
          link="webtoonsCombined"
        />
        <Project title="Mise" desc="#React #Express" image={mise} link="mise" />
        <Project
          title="Todolist"
          desc="#Kotlin #SpringBoot #React #Mysql"
          image={todo}
          link="todolist"
        />
      </div>
    </Section>
  );
}

type ProjectProps = {
  title: string;
  desc: string;
  image: string;
  link: string;
};

function Project({ title, desc, image, link }: ProjectProps) {
  return (
    <div
      className={styles.Project}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => openGithub(link)}
    >
      <div className={styles.content}>
        <div className={styles.item}>
          <span className={styles.title}>{title}</span>
          <span className={styles.desc}>{desc}</span>
        </div>
      </div>
    </div>
  );
}
