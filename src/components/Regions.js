import Region from "./Region";
import styles from "./Regions.module.css";

import honsiu from "../assets/honsiu.png";
import ksiusiu from "../assets/ksiusiu.png";
import hokkaido from "../assets/hokkaido.png";
import sikoku from "../assets/sikoku.png";

const Regions = () => {
  return (
    <section className={styles.container}>
      <Region img={honsiu} title="honsiu" />
      <Region img={hokkaido} title="hokkaido" />
      <Region img={sikoku} title="sikoku" />
      <Region img={ksiusiu} title="ksiusiu" />
    </section>
  );
};

export default Regions;
