import styles from "./Contact.module.css";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.image}></div>
      <div className={styles.description}>
        <h1>Arigato,</h1>
        <p>
          miło mi, że zajrzałeś na mojego bloga. Pozostańmy w kontakcie! Możesz
          wysłać do mnie wiadomość poprzez formularz obok - postaram się
          odpowiedzieć w ciągu 2 dni.
          <br />
          <br />
          Zapraszam Cię też na moje media społecznościowe. Znajdziesz tam więcej
          materiałów o Japoni.
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
      <div className={styles.form}>
        <form>
          <label htmlFor="name" type="text">
            Imię
          </label>
          <input placeholder="Jak masz na imię?" />
          <label htmlFor="email" type="email">
            Email
          </label>
          <input placeholder="example@example.com" />
          <label htmlFor="message" type="text">
            Email
          </label>
          <input placeholder="wpisz swoją wiadomość" />
          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>
              Wyrażam zgodę na przetwarzanie moich danych osobowych.{" "}
              <a>Polityka prywatności</a>
            </p>
          </div>
          <button>Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
