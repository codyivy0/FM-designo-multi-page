import FooterWithCard from "../Components/FooterWithCard/FooterWithCard";
import styles from "./WebDesign.module.css";

const WebDesign = () => {
  return (
    <>
      <main>
        <section className={styles.banner}>
          <h1>Web Design</h1>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </section>
        <div className={styles.WDWrapper}>
          <section className={styles.project}>
            <img src="/images/web-design/image-express.jpg" alt="" />
            <div className={styles.cardText}>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for exommerce businesses.</p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-express.jpg" alt="" />
            <div className={styles.cardText}>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for exommerce businesses.</p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-express.jpg" alt="" />
            <div className={styles.cardText}>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for exommerce businesses.</p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-express.jpg" alt="" />
            <div className={styles.cardText}>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for exommerce businesses.</p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-express.jpg" alt="" />
            <div className={styles.cardText}>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for exommerce businesses.</p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-express.jpg" alt="" />
            <div className={styles.cardText}>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for exommerce businesses.</p>
            </div>
          </section>
        </div>
      </main>
      <FooterWithCard />
    </>
  );
};

export default WebDesign;
