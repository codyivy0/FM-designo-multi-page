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
              <NavLink
                to={"/web-design"}
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
                onClick={toggleMenu}
              >
                Web Design
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/app-design"}
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
                onClick={toggleMenu}
              >
                App Design
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/graphic-design"}
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
                onClick={toggleMenu}
              >
                Graphic Design
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
                onClick={toggleMenu}
              >
                Our Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/locations"}
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
                onClick={toggleMenu}
              >
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </section>

        <section className={styles.desktopNav}>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? styles.active : "none")}
          >
            Our Company
          </NavLink>
          <NavLink
            to={"/locations"}
            className={({ isActive }) => (isActive ? styles.active : "none")}
          >
            Locations
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? styles.active : "none")}
          >
            Contact
          </NavLink>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
