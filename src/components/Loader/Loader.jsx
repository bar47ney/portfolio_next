import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={styles.spinner_9y7u + " loader " + styles.theme}
        x="1"
        y="1"
        rx="1"
        width="10"
        height="10"
      />
      <rect
        className={styles.spinner_9y7u + " loader " + styles.spinner_DF2s + " " + styles.theme}
        x="1"
        y="1"
        rx="1"
        width="10"
        height="10"
      />
      <rect
        className={styles.spinner_9y7u + " loader " + styles.spinner_q27e + " " + styles.theme}
        x="1"
        y="1"
        rx="1"
        width="10"
        height="10"
      />
    </svg>
  );
};

export default Loader;
