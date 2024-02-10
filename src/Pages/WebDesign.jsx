import { NavLink } from "react-router-dom";
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
            <img src="/images/web-design/image-express.jpg" alt="express" />
            <div className={styles.cardText}>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for ecommerce businesses</p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-transfer.jpg" alt="transfer" />
            <div className={styles.cardText}>
              <h1>TRANSFER</h1>
              <p>
                Site for low-cost money trasnsfers and sending money within
                seconds
              </p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-photon.jpg" alt="photon" />
            <div className={styles.cardText}>
              <h1>PHOTON</h1>
              <p>
                A state-of-the-art music player with high-resolution audio and
                DSP effects
              </p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-builder.jpg" alt="builder" />
            <div className={styles.cardText}>
              <h1>BUILDER</h1>
              <p>
                Connects users with local contractors based on their location
              </p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-blogr.jpg" alt="blogr" />
            <div className={styles.cardText}>
              <h1>BLOGR</h1>
              <p>
                Blogr is a platform for creating an online blog or publication.
              </p>
            </div>
          </section>

          <section className={styles.project}>
            <img src="/images/web-design/image-camp.jpg" alt="camp" />
            <div className={styles.cardText}>
              <h1>CAMP</h1>
              <p>
                Get expert training in coding, data, design, and digital
                marketing
              </p>
            </div>
          </section>
        </div>

        <section className={styles.navLinks}>
          <NavLink
            className={styles.projectCard2}
            to={"/app-design"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className={`${styles.projectCard} `}>
              <h1>App design</h1>
              <p>View Projects</p>
            </div>
          </NavLink>
          <NavLink
            className={styles.projectCard3}
            to={"/graphic-design"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className={`${styles.projectCard}`}>
              <h1>Graphic design</h1>
              <p>View Projects</p>
            </div>
          </NavLink>
        </section>
      </main>
      <FooterWithCard />
    </>
  );
};

export default WebDesign;
