import { NavLink } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import DesignCard from "../Components/DesignCard/DesignCard";
import FooterWithCard from "../Components/FooterWithCard/FooterWithCard";
import styles from "./AppDesign.module.css";

const AppDesign = () => {
  return (
    <>
      <main>
        <Banner>
          <h1>App Design</h1>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </Banner>
        <section className={styles.appWrapper}>
          <DesignCard
            src={"/images/app-design/image-airfilter.jpg"}
            title={"AIRFILTER"}
            text={
              "Solving the problem of poor indoor air quality by filtering the air"
            }
          />
          <DesignCard
            src={"/images/app-design/image-eyecam.jpg"}
            title={"EYECAM"}
            text={
              "Product that lets you edit your favorite photos and videos at any time"
            }
          />
          <DesignCard
            src={"/images/app-design/image-faceit.jpg"}
            title={"FACEIT"}
            text={
              "Get to meet your favorite internet superstar with the faceit app "
            }
          />
          <DesignCard
            src={"/images/app-design/image-todo.jpg"}
            title={"TODO"}
            text={
              "A todo app that features cloud sync with light and dark mode"
            }
          />
          <DesignCard
            src={"/images/app-design/image-loopstudios.jpg"}
            title={"LOOPSTUDIOS"}
            text={"A VR experience app made for Loopstudios"}
          />
        </section>

        <section className={styles.navLinks}>
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

export default AppDesign;
