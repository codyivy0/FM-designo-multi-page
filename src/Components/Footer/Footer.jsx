import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className={styles.footerNav}>
        <NavLink to={"/"}>
          <img
            src="/images/logo/logo-light.png"
            className={styles.footerLogo}
            alt="designo logo"
            height={27}
          />
        </NavLink>
        <div className={styles.footerDividerMobile}></div>
        <div className={styles.footerLinks}>
          <NavLink className={styles.footerLink} to={"/about"}>
            OUR COMPANY
          </NavLink>
          <NavLink className={styles.footerLink} to={"/locations"}>
            LOCATIONS
          </NavLink>
          <NavLink className={styles.footerLink} to={"/contact"}>
            CONTACT
          </NavLink>
        </div>
      </section>

      <section className={styles.footerContactInfo}>
        <div>
          <p className={styles.fw700}>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p className={styles.fw700}>Contact Us (Central Office)</p>
          <p className={styles.fw700}>P: +1 253-863-8967</p>
          <p className={styles.fw700}>M: contact@designo.co</p>
        </div>
        <div>
          <p>socials here</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
