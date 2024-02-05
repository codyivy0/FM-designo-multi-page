import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <main>
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand experiences.
            Find out more about our services.
          </p>
          <Button>LEARN MORE</Button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Homepage;
