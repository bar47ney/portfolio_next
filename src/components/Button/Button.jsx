import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
import Loader from "../Loader/Loader";

const Button = ({ text, url, target }) => {
  return (
    <Link href={url} target={target ? target : "_self"}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
