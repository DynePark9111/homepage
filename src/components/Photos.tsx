import Section from "./Section";
import { FaCamera, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import meeInn0 from "../assets/photos/meeInn0.jpeg";
import meeInn1 from "../assets/photos/meeInn1.jpeg";
import meeInn2 from "../assets/photos/meeInn2.jpeg";
import meeInn3 from "../assets/photos/meeInn3.jpeg";
import cafe from "../assets/photos/cafe.jpeg";
import styles from "../styles/Photos.module.scss";
import { useState } from "react";
import Modal from "./Modal";

export default function Photos() {
  const [photo, setPhoto] = useState(-1);

  return (
    <>
      <Section icon={<FaCamera />} title="Photos">
        <div className={styles.Photos}>
          {photoList.map((photo) => {
            return (
              <Photo
                key={photo.id}
                id={photo.id}
                title={photo.title}
                image={photo.image}
                desc={photo.desc}
                setPhoto={setPhoto}
              />
            );
          })}
        </div>
      </Section>
      <Modal open={photo > -1} onClose={() => setPhoto(-1)}>
        {photo > -1 && <PhotoModal photo={photo} setPhoto={setPhoto} />}
      </Modal>
    </>
  );
}

function Photo({ id, title, desc, image, setPhoto }: PhotoType) {
  return (
    <div className={styles.Photo} onClick={() => setPhoto(id)}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.desc}>{desc}</span>
      </div>
    </div>
  );
}

function PhotoModal({ photo, setPhoto }: PhotoModalProps) {
  function slideLeft() {
    photo <= 0 ? setPhoto(photoList.length - 1) : setPhoto(photo - 1);
  }
  function slideRight() {
    photo >= photoList.length - 1 ? setPhoto(0) : setPhoto(photo + 1);
  }
  return (
    <div className={styles.PhotoModal} onClick={(e) => e.stopPropagation()}>
      <FaChevronLeft className={styles.leftIcon} onClick={slideLeft} />
      <FaChevronRight className={styles.rightIcon} onClick={slideRight} />
      <img
        className={styles.modalImg}
        title={photoList[photo].desc}
        src={photoList[photo].image}
        alt={photoList[photo].title}
      />
    </div>
  );
}

type PhotoType = {
  id: number;
  title: string;
  desc: string;
  image: string;
  setPhoto: (key: number) => void;
};

type PhotoModalProps = {
  photo: number;
  setPhoto: (photo: number) => void;
};

const photoList = [
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
