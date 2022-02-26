import styles from "./About.module.css";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

import photo from "../assets/foto-o-mnie.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={photo} />
      </div>
      <div className={styles.description}>
        <h1>Konnichiwa,</h1>
        <p>
          jestem Ala. Goszcząc w japońskim domu, należy wziąć ze sobą upominek
          dla gospodarza. Zaproszenie traktowane jest bowiem jak zaszczyt.
          Prezent powinien być starannie zapakowany – mogą to być ciasteczka lub
          jakiś przedmiot z naszego kraju, np. polskie czekoladki. Goszcząc w
          japońskim domu, należy wziąć ze sobą upominek dla gospodarza.{" "}
        </p>
        <div className={styles.icons}>
          <span>
            <img src={instagram} />
          </span>
          <span>
            <img src={facebook} />
          </span>
          <span>
            <img src={youtube} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
