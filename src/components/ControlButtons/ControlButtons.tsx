import { IoPlayOutline } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { TiArrowBack } from "react-icons/ti";
import styles from "./ControlButtons.module.scss";

const ControlButtons = () => {
  return (
    <div className={styles.control}>
      <button className={styles.control__button}>
        <IoPlayOutline className={styles.control__svg} />
        <p className={styles.control__title}>Новая игра</p>
      </button>
      <button className={styles.control__button}>
        <VscDebugRestart className={styles.control__svg} />
        <p className={styles.control__title}>Начать заново</p>
      </button>
      <button className={styles.control__button}>
        <TiArrowBack className={styles.control__svg} />
        <p className={styles.control__title}>Отменить ход</p>
      </button>
    </div>
  );
};

export default ControlButtons;
