/* eslint-disable react/prop-types */
import styles from "./DesignCard.module.css";

const DesignCard = ({ src, title, text }) => {
  return (
    <section className={styles.project}>
      <img src={src} alt={title} />
      <div className={styles.cardText}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default DesignCard;
