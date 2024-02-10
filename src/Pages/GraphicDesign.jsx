import { NavLink } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import DesignCard from "../Components/DesignCard/DesignCard";
import FooterWithCard from "../Components/FooterWithCard/FooterWithCard";
import styles from "./GraphicDesign.module.css";

const GraphicDesign = () => {
  return (
    <>
      <main>
        <Banner>
          <h1>Graphic Design</h1>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </Banner>
        <section className={styles.graphicWrapper}>
          <DesignCard
            src={"/images/graphic-design/image-change.jpg"}
            title={"TIM BROWN"}
            text={'A book cover designed for Tim Browns new release, "Change"'}
          />
          <DesignCard
            src={"/images/graphic-design/image-boxed-water.jpg"}
            title={"BOXED WATER"}
            text={"A simple packaging concept made for Boxed Water"}
          />
          <DesignCard
            src={"/images/graphic-design/image-science.jpg"}
            title={"SCIENCE!"}
            text={"A poster made in collaboration with the Federal Art Project"}
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
            className={styles.projectCard1}
            to={"/web-design"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className={`${styles.projectCard} `}>
              <h1>Web Design</h1>
              <p>View Projects</p>
            </div>
          </NavLink>
        </section>
      </main>
      <FooterWithCard />
    </>
  );
};

export default GraphicDesign;
