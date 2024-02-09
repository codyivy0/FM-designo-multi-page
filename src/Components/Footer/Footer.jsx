import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerNoCard}>
      <section className={styles.footerNav}>
        <NavLink to={"/"}>
          <img
            src="/images/logo/logo-light.png"
            className={styles.footerLogo}
            alt="designo logo"
            height={27}
            onClick={() => window.scroll(0, 0)}
          />
        </NavLink>
        <div className={styles.footerDividerMobile}></div>
        <div className={styles.footerLinks}>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? styles.active : ""} ${styles.footerLink} `
            }
            to={"/about"}
            onClick={() => window.scroll(0, 0)}
          >
            OUR COMPANY
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${styles.footerLink}  `
            }
            exact
            to={"/locations"}
            onClick={() => window.scroll(0, 0)}
          >
            LOCATIONS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${styles.footerLink} `
            }
            exact
            to={"/contact"}
            onClick={() => window.scroll(0, 0)}
          >
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
