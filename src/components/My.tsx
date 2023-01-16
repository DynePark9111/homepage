import { useContext, useRef } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/My.module.scss";
import { UserStatus } from "../utils/types";
import { getStatusStyle, openGithub } from "../utils/utils";
import MyHeader from "./MyHeader";
import Photos from "./Photos";
import Projects from "./Projects";
import QuickNav from "./QuickNav";
import Ribbon from "./Ribbon";
import Weather from "./Weather";
import Youtube from "./Youtube";

export default function My() {
  const { userStatus } = useContext(AppContext);
  const refs = useRef<HTMLDivElement[]>([]);

  return (
    <div className={styles.My} id={getStatusStyle(userStatus, styles)}>
      <div className={styles.ribbonWrapper}>
        {userStatus === UserStatus.LoggedIn && (
          <Ribbon
            line1="Welcome to Dyne Park's Homepage"
            line2="Visit Github"
            onClick={() => openGithub("homepage")}
          />
        )}
      </div>
      <div className={styles.wrapper}>
        <MyHeader />
        <QuickNav />
        <Weather />
        <Projects />
        <Youtube />
        <Photos />
      </div>
    </div>
  );
}
