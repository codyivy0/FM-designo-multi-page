import { NavLink } from "react-router-dom";
import styles from "./ProjectCards.module.css";

const ProjectCards = () => {
  return (
    <section className={styles.cardsContainer}>
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
  );
};

export default ProjectCards;
