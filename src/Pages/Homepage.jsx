import { NavLink } from "react-router-dom";
import Button from "../Components/Button/Button";

import styles from "./Homepage.module.css";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import InfoCards from "../Components/InfoCards/InfoCards";
import FooterWithCard from "../Components/FooterWithCard/FooterWithCard";

const Homepage = () => {
  return (
    <main>
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <NavLink to={"/about"}>
            <Button>LEARN MORE</Button>
          </NavLink>
        </div>
      </section>
      <ProjectCards />
      <InfoCards />
      <FooterWithCard />
    </main>
  );
};

export default Homepage;
