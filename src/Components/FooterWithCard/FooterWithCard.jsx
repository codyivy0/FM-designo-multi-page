import Button from "../Button/Button";
import styles from "./FooterWithCard.module.css";
import { NavLink } from "react-router-dom";

const FooterWithCard = () => {
  return (
    <footer className={styles.footerWithCard}>
      <section className={styles.footerCard}>
        <div>
          <h1>Lets talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <NavLink
          to={"/contact"}
          className={styles.inTouchBtn}
          onClick={() => window.scroll(0, 0)}
        >
          <Button className={styles.btn}>GET IN TOUCH</Button>
        </NavLink>
      </section>

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
        <div className={styles.socials}>
          <a href="https://www.facebook.com/">
            <img src="/svg/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="https://www.youtube.com/">
            <img src="/svg/icon-youtube.svg" alt="youtube" />
          </a>
          <a href="https://twitter.com">
            <img src="/svg/icon-twitter.svg" alt="twitter" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src="/svg/icon-pinterest.svg" alt="pinterest" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/svg/icon-instagram.svg" alt="instagram" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default FooterWithCard;
