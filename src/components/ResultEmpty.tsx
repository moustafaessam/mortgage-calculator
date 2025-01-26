import styles from "../styles/ResultEmpty.module.css";

function ResultEmpty() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <img
          src="/images/illustration-empty.svg"
          alt="empty illustraion"
          className={styles.img}
        />
      </div>
      <div className={styles.header}>Results shown here</div>
      <div className={styles.text}>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </div>
    </div>
  );
}

export default ResultEmpty;
