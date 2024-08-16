import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderStats from "./HeaderStats";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <HeaderNavigation />
        <HeaderStats />
      </div>
    </header>
  );
};

export default Header;
