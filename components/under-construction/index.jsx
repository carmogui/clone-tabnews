import styles from "./styles.module.css";

export function UnderConstruction() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>🌌 sideuniverse</h1>

          <div className={styles.textContainer}>
            <p>
              here is going to be the internet space where we can share our{" "}
              <strong>side projects</strong>
            </p>
            <p>and together improve them with some cool community feedback</p>
          </div>
        </div>

        <div className={styles.warningWrapper}>
          <h2>⚠️ currently working on the API ⚠️</h2>
          <li>
            <a href="api/v1/status" target="_blank">
              api/v1/status
            </a>
          </li>
        </div>

        <div className={styles.endContainer}>
          <span>also, check my personal website 😄</span>
          <a
            className={styles.buttonLink}
            href="https://www.carmogui.dev/"
            target="_blank"
          >
            carmogui.dev
          </a>
        </div>
      </div>
    </div>
  );
}
