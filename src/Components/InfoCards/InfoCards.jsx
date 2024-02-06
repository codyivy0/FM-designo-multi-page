import styles from "./InfoCards.module.css";

const InfoCards = () => {
  return (
    <section className={styles.infoContainer}>
      <div className={styles.infoCard}>
        <div className={`${styles.imagesContainer} ${styles.circle}`}>
          <img src="/svg/illustration-passionate.svg" alt="passionate" />
        </div>
        <div className={styles.infoText}>
          <h1>Passionate</h1>
          <p>
            Each project starts with in-depth brand research to ensure we only
            create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>

      <div className={styles.infoCard}>
        <div className={`${styles.imagesContainer} ${styles.circleBottom}`}>
          <img src="/svg/illustration-resourceful.svg" alt="resourceful" />
        </div>
        <div className={styles.infoText}>
          <h1>Resourceful</h1>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients needs.
          </p>
        </div>
      </div>

      <div className={styles.infoCard}>
        <div className={`${styles.imagesContainer} ${styles.circleTop}`}>
          <img src="/svg/illustration-friendly.svg" alt="friendly" />
        </div>
        <div className={styles.infoText}>
          <h1>Friendly</h1>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
