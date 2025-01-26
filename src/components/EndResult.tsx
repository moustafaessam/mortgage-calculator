import { useFormContext } from "react-hook-form";
import styles from "../styles/EndResult.module.css";
import type { FormInput } from "../App";

function EndResult() {
  const { watch } = useFormContext<FormInput>();
  // Inputs
  const amount = watch("amount");
  const term = watch("term");
  const rate = watch("rate");
  const type = watch("type");
  // Caculations
  const p = amount;
  const r = rate / 12;
  const n = term * 12;
  const monthlyRepayments =
    type === "repayment"
      ? p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
      : p * r;
  const totalPayments = monthlyRepayments * 12;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.resultInfo}>
        <p className={styles.resultInfoheader}>Your Results</p>
        <p className={styles.resultInfoText}>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>
      <div className={styles.resultContainer}>
        <div className={styles.resultContainerHeader}>
          <p className={styles.monthlyHeader}>Your monthly repayments</p>
          <p className={styles.monthlyAmount}>{monthlyRepayments.toFixed(2)}</p>
        </div>
        <hr className={styles.lineBreak} />
        <div className={styles.endContainer}>
          <p className={styles.endText}>Total you'll repay over the term</p>
          <p className={styles.endAmount}>{totalPayments.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default EndResult;
