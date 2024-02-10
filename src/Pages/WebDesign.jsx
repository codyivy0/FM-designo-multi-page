import { NavLink } from "react-router-dom";
import FooterWithCard from "../Components/FooterWithCard/FooterWithCard";
import styles from "./WebDesign.module.css";
import Banner from "../Components/Banner/Banner";
import DesignCard from "../Components/DesignCard/DesignCard";

const WebDesign = () => {
  return (
    <>
      <main>
        <Banner>
          <h1>Web Design</h1>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </Banner>

        <section className={styles.WDWrapper}>
          <DesignCard
            src={"/images/web-design/image-express.jpg"}
            title={"EXPRESS"}
            text={"A multi-carrier shipping website for ecommerce businesses"}
          />
          <DesignCard
            src={"/images/web-design/image-transfer.jpg"}
            title={"TRANSFER"}
            text={
              "Site for low-cost money trasnsfers and sending money within seconds"
            }
          />

          <DesignCard
            src={"/images/web-design/image-photon.jpg"}
            title={"PHOTON"}
            text={
              "A state-of-the-art music player with high-resolution audio and DSP effects"
            }
          />
          <DesignCard
            src={"/images/web-design/image-builder.jpg"}
            title={"BUILDER"}
            text={
              "Connects users with local contractors based on their location"
            }
          />
          <DesignCard
            src={"/images/web-design/image-blogr.jpg"}
            title={"BLOGR"}
            text={
              "Blogr is a platform for creating an online blog or publication."
            }
          />
          <DesignCard
            src={"/images/web-design/image-camp.jpg"}
            title={"CAMP"}
            text={
              "Get expert training in coding, data, design, and digital marketing"
            }
          />
        </section>

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
