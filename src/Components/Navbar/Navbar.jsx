import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  }

  return (
    <>
      <div
        className={`${styles.overlay} ${mobileMenuIsOpen ? styles.open : ""}`}
      />

      <nav className={styles.navbar}>
        <NavLink to={"/"}>
          <img
            src="/images/logo/logo-dark.png"
            className={styles.logo}
            alt="designo logo"
            height={27}
          />
        </NavLink>

        <img
          className={styles.mobileMenuBtn}
          src="/images/icon-menu.svg"
          alt=""
          height={60}
          onClick={toggleMenu}
        />

        <section
          className={`${styles.sidebar} ${mobileMenuIsOpen ? styles.open : ""}`}
        >
          <img
            src="/svg/icon-close.svg"
            className={styles.mobileBtnClose}
            height={30}
            onClick={toggleMenu}
            alt=""
          />

          <ul>
            <li>
              <NavLink to={"/web-design"} onClick={toggleMenu}>
                Web Design
              </NavLink>
            </li>
            <li>
              <NavLink to={"/app-design"} onClick={toggleMenu}>
                App Design
              </NavLink>
            </li>
            <li>
              <NavLink to={"/graphic-design"} onClick={toggleMenu}>
                Graphic Design
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={toggleMenu}>
                Our Company
              </NavLink>
            </li>
            <li>
              <NavLink to={"/locations"} onClick={toggleMenu}>
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </section>

        <section className={styles.desktopNav}>
          <NavLink to={"/about"}>Our Company</NavLink>
          <NavLink to={"/locations"}>Locations</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
