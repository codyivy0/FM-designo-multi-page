/* eslint-disable react/prop-types */

import styles from "./Banner.module.css";

const Banner = ({children}) => {
  return (
    <section className={styles.banner}>
      {children}
    </section>
  );
};

export default Banner;
