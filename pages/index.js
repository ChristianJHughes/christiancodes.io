import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: "96px", margin: "0 0 24px 0" }}>
        Christian Hughes
      </h1>
      <h2>Currently learning NextJS</h2>
      <a
        style={{ color: "blue" }}
        href="https://github.com/ChristianJHughes/christiancodes.io"
      >
        STAY TUNED
      </a>
    </div>
  );
}
