import Section from "./Section";
import { FaCamera } from "react-icons/fa";
import meeInn0 from "../assets/photos/meeInn0.jpeg";
import meeInn1 from "../assets/photos/meeInn1.jpeg";
import meeInn2 from "../assets/photos/meeInn2.jpeg";
import meeInn3 from "../assets/photos/meeInn3.jpeg";
import cafe from "../assets/photos/cafe.jpeg";
import styles from "../styles/Photos.module.scss";

export default function Photos() {
  return (
    <Section icon={<FaCamera />} title="Photos">
      <div className={styles.Photos}>
        {photos.map((photo) => {
          return (
            <Photo
              key={photo.id}
              title={photo.title}
              image={photo.image}
              desc={photo.desc}
            />
          );
        })}
      </div>
    </Section>
  );
}

type PhotoType = {
  title: string;
  desc: string;
  image: string;
};

function Photo({ title, desc, image }: PhotoType) {
  return (
    <>
      <div className={styles.Photo}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <span className={styles.desc}>{desc}</span>
        </div>
      </div>
    </>
  );
}

const photos = [
  {
    id: 0,
    title: "Spring",
    desc: "#MeeInn #happy",
    image: meeInn0,
  },
  {
    id: 1,
    title: "Summer",
    desc: "#MeeInn #sneaky",
    image: meeInn3,
  },
  {
    id: 2,
    title: "Fall",
    desc: "#MeeInn #sleepy",
    image: meeInn2,
  },

  {
    id: 3,
    title: "Winter",
    desc: "#MeeInn #snow",
    image: meeInn1,
  },
  {
    id: 4,
    title: "Cafe",
    desc: "#cafe #coffee #Jong-ro",
    image: cafe,
  },
];
