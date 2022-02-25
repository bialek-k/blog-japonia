import styles from "./Region.module.css";

const Region = ({ img, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.region}>
        <img src={img} className={styles.icon} />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Region;
