import Loop from "./Loop";
import Section from "./Section";
import { FaYoutube } from "react-icons/fa";
import styles from "../styles/Youtube.module.scss";

export default function Youtube() {
  return (
    <Section icon={<FaYoutube />} title="Youtube">
      <div className={styles.Youtube}>
        <header className={styles.title}>Coding</header>
        <Loop speed={40} direction="right">
          {tech.map((channel) => {
            return (
              <div className={styles.contentBox} key={channel.title}>
                <img
                  src={channel.image}
                  alt={channel.title}
                  title={channel.title}
                  onClick={() => goToYoutube(channel.link)}
                />
              </div>
            );
          })}
        </Loop>

        <header className={styles.title}>Hobby</header>
        <Loop speed={60} direction="right">
          {hobby.map((channel) => {
            return (
              <div className={styles.contentBox} key={channel.title}>
                <img
                  src={channel.image}
                  alt={channel.title}
                  title={channel.title}
                  onClick={() => goToYoutube(channel.link)}
                />
              </div>
            );
          })}
        </Loop>
      </div>
    </Section>
  );

  function goToYoutube(name: string) {
    window.open(`https://www.youtube.com/@${name}`, "_blank");
  }
}

const tech = [
  {
    title: "Fireship",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s176-c-k-c0x00ffffff-no-rj",
    link: "Fireship",
  },
  {
    title: "Beyond Fireship",
    image:
      "https://yt3.googleusercontent.com/3MC9XX7rtxeS55uoOQG2nvJ7zaBd17r8Uh0yk_R3KyKjAK_u4RlHhZcTCkx4yym0guGWdefD5Q=s176-c-k-c0x00ffffff-no-rj",
    link: "beyondfireship",
  },
  {
    title: "Web Dev Simplified",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s176-c-k-c0x00ffffff-no-rj",
    link: "WebDevSimplified",
  },

  {
    title: "ThePrimeagen",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu9n7GH1zZmpY9J8kB-BqUwy_2JoaP3hQo4rZw1W=s176-c-k-c0x00ffffff-no-rj",
    link: "ThePrimeagen",
  },
  {
    title: "노마드 코더 Nomad Coders",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu9oK13cNMbLQY4tdSv9a0CWOFlwlfdAF-UDM3ZUmg=s176-c-k-c0x00ffffff-no-rj",
    link: "nomadcoders",
  },
  {
    title: "@시코 - 시니어코딩",
    image:
      "https://yt3.ggpht.com/OpFndZzuAyxzq3gKcVIUVQIl-V1LrwOKeJY18sCpQIzp6ddQXmWFzSEjvES9CN0bVOhx2-ubOg=s176-c-k-c0x00ffffff-no-rj",
    link: "SeniorCoding",
  },
  {
    title: "Be A Better Dev",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu-Ppc7MxFpzi1Gk8cKweEXFM7K0eMJSBkeDH-NDUg=s176-c-k-c0x00ffffff-no-rj",
    link: "BeABetterDev",
  },
  {
    title: "freeCodeCamp.org",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj",
    link: "freecodecamp",
  },
  {
    title: "FEConf Korea",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu8tZkSBS_7fZK7um6oDrNax4EjMf7Ye6pCqIc6XlA=s176-c-k-c0x00ffffff-no-rj",
    link: "feconfkorea",
  },
];

const hobby = [
  {
    title: "ITSub잇섭",
    image:
      "https://yt3.ggpht.com/ytc/AMLnZu-wqNEZkaT1naa0bFTW8UJb0Rg35H5NkdjRN94ccA=s176-c-k-c0x00ffffff-no-rj",
    link: "ITSUB",
  },
  {
    title: "슈카월드",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu_KptPhlZ024JCVEU_eptEnciU89Hp_MNcGL2Vl=s176-c-k-c0x00ffffff-no-rj",
    link: "syukaworld",
  },
  {
    title: "Kurzgesagt – In a Nutshell",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu8giocL5QtOHe8hLjl6xNobvGl8ZQS05wVFmybVCg=s176-c-k-c0x00ffffff-no-rj",
    link: "kurzgesagt",
  },
  {
    title: "안될과학",
    image:
      "https://yt3.ggpht.com/ytc/AMLnZu-FPJv66wbPdjQASHYZEprUYQOGgulX_HvVyj5c=s176-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@Unrealscience",
  },
  {
    title: "안될공학",
    image:
      "https://yt3.ggpht.com/8PUa-2RnefBpUSobpDw2vTbg8hqh4CtK-CDQ20pDAXn7wjBlQNWDC-QycQRW04BMpdChInib-g=s176-c-k-c0x00ffffff-no-rj",
    link: "unrealtech",
  },

  {
    title: "김성회의 G식백과",
    image:
      "https://yt3.googleusercontent.com/pToQZjeWg8_mjuX8Nli3rpwUrqK1OiuSf1RfU7F8f2ettYPRYIdeMAeUuBUb1udnvx4BcwgjMg=s176-c-k-c0x00ffffff-no-rj",
    link: "gsbg",
  },
  {
    title: "북툰",
    image:
      "https://yt3.googleusercontent.com/ytc/AMLnZu_5XMBM4iuItw_aJaWrSIBS5cR3RJtwTmsH6P1w6g=s176-c-k-c0x00ffffff-no-rj",
    link: "book_toon",
  },
];
