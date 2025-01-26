import styles from "../styles/CalculateButton.module.css";

export default function CalculateButton() {
  return (
    <button className={styles.calcButton} type="submit">
      <img
        src="/images/icon-calculator.svg"
        alt="calculator"
        className={styles.calcImg}
      />
      <p className={styles.calcText}>Calculate Repayments</p>
    </button>
  );
}
