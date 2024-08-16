import React from "react";
import styles from "./Header.module.scss";

const HeaderStats: React.FC = () => {
  return (
    <section className={styles.header__stats}>
      <div className={styles.header__statItem}>
        <label className={styles.header__statLabel}>Счетчик ходов</label>
        <p className={styles.header__statValue}>-</p>
      </div>
      <div className={styles.header__statItem}>
        <label className={styles.header__statLabel}>Ваш рекорд</label>
        <p className={styles.header__statValue}>-</p>
      </div>
    </section>
  );
};

export default HeaderStats;
