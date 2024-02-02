import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img
        src="/images/logo/logo-dark.png"
        className={styles.logo}
        alt="designo logo"
        height={27}
      />

      <img
        className={styles.mobileMenuBtn}
        src="/images/icon-menu.svg"
        alt=""
        height={60}
        onClick={() => setmobileMenuIsOpen(!mobileMenuIsOpen)}
      />

      {mobileMenuIsOpen && (
        <section className={styles.mobileNav}>
          <a href="#">Our Company</a>
          <a href="#">Locations</a>
          <a href="#">Contact</a>
        </section>
      )}

      <section className={styles.desktopNav}>
        <a href="#">Our Company</a>
        <a href="#">Locations</a>
        <a href="#">Contact</a>
      </section>
    </nav>
  );
};

export default Navbar;
