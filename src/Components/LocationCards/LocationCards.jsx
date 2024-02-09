import styles from "./LocationCards.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const LocationCards = () => {
  return (
    <section className={styles.sectionLocations}>
      <div className={styles.location}>
        <div className={`${styles.imagesContainer} ${styles.circleTop}`}>
          <img src="/svg/illustration-canada.svg" alt="Canada" />
        </div>
        <p className={styles.locationName}>Canada</p>
        <NavLink to={"/locations"} onClick={() => window.scroll(0, 0)}>
          <Button className={styles.locationBtn}>SEE LOCATION</Button>
        </NavLink>
      </div>
      <div className={styles.location}>
        <div className={`${styles.imagesContainer} ${styles.circle}`}>
          <img src="/svg/illustration-australia.svg" alt="Australia" />
        </div>
        <p className={styles.locationName}>Australia</p>
        <NavLink to={"/locations"} onClick={() => window.scroll(0, 0)}>
          <Button className={styles.locationBtn}>SEE LOCATION</Button>
        </NavLink>
      </div>
      <div className={styles.location}>
        <div className={`${styles.imagesContainer} ${styles.circleBottom}`}>
          <img
            src="/svg/illustration-united-kingdom.svg"
            alt="United Kingdom"
          />
        </div>
        <p className={styles.locationName}>United Kingdom</p>
        <NavLink to={"/locations"} onClick={() => window.scroll(0, 0)}>
          <Button className={styles.locationBtn}>SEE LOCATION</Button>
        </NavLink>
      </div>
    </section>
  );
};

export default LocationCards;
