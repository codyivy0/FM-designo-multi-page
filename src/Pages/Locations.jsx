import styles from "./Locations.module.css";
import FooterWithCard from "../Components/FooterWithCard/FooterWithCard";

const Locations = () => {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div className={`${styles.imageHolder} ${styles.canadaMap}`}>
            <img
              src="/images/locations/desktop/image-map-canada.png"
              alt="canada location"
            />
          </div>
          <div className={`${styles.locationText} ${styles.canadaText}`}>
            <h1>Canada</h1>
            <div>
              <strong>Designo Central Office</strong>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <strong>Contact</strong>
              <p>P: +1 253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
          </div>

          <div className={`${styles.imageHolder} ${styles.australiaMap}`}>
            <img
              src="/images/locations/desktop/image-map-australia.png"
              alt="Australia location"
            />
          </div>
          <div className={`${styles.locationText} ${styles.australiaText}`}>
            <h1>Australia</h1>
            <div>
              <strong>Designo Central Office</strong>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <strong>Contact</strong>
              <p>P: +1 253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
          </div>

          <div className={`${styles.imageHolder} ${styles.UKMap}`}>
            <img
              src="/images/locations/desktop/image-map-uk.png"
              alt="United Kingdom location"
            />
          </div>
          <div className={`${styles.locationText} ${styles.UKText}`}>
            <h1>United Kingdom</h1>
            <div>
              <strong>Designo Central Office</strong>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <strong>Contact</strong>
              <p>P: +1 253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
          </div>
        </div>
      </main>
      <FooterWithCard />
    </>
  );
};

export default Locations;
