import styles from "./Articles.module.css";
import nikko from "../assets/nikko.png";
import kanto from "../assets/Kanto.png";
import aso from "../assets/Aso.png";
import { Link } from "react-router-dom";
import Article from "./Article";

const Articles = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.article}>
          <div className={styles.description}>
            <p>HONSIU</p>
            <h1>Nikko - niezwykła świątynia pośród gór</h1>
            <p>
              Japonia słynie z festiwali. Podobno jest ich tam więcej niz dni w
              roku. Jednym z najbardziej wyjątkowych jest Festiwal Lampionow w
              mieście Akita.{" "}
            </p>
            <span>czytaj dalej{">"}</span>
          </div>
          <div className={styles.articlePhoto}>
            <img src={nikko} />
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.description}>
            <p>KSIUKSIU</p>
            <h1>Góra Aso- największy wulkan w Japonii</h1>
            <p>
              Japonia słynie z festiwali. Podobno jest ich tam więcej niz dni w
              roku. Jednym z najbardziej wyjątkowych jest Festiwal Lampionow w
              mieście Akita.
            </p>
            <Link to="/Article">czytaj dalej{">"}</Link>
          </div>
          <div className={styles.articlePhoto}>
            <img src={aso} />
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.description}>
            <p>HONSIU</p>
            <h1>Kanto Matsuri - festiwal lampionów</h1>
            <p>
              Japonia słynie z festiwali. Podobno jest ich tam więcej niz dni w
              roku. Jednym z najbardziej wyjątkowych jest Festiwal Lampionow w
              mieście Akita.
            </p>
            <span>czytaj dalej{">"}</span>
          </div>
          <div className={styles.articlePhoto}>
            <img src={kanto} />
          </div>
        </div>
        <div className={styles.btn}>
          <button>Więcej wpisów</button>
        </div>
      </div>
    </>
  );
};

export default Articles;
