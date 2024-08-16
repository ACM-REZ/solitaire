import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import styles from "./Header.module.scss";

const HeaderNavigation: React.FC = () => {
  return (
    <Link
      to="/"
      className={styles.header__link}
      aria-label="Вернуться к правилам"
    >
      <IoArrowBackSharp className={styles.header__icon} />
      <p className={styles.header__text}>Правила</p>
    </Link>
  );
};

export default HeaderNavigation;
