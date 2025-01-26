import { useFormContext } from "react-hook-form";
import styles from "../styles/Type.module.css";
import type { FormInput } from "../App";

export default function Type() {
  const form = useFormContext<FormInput>();
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <div className={`${styles.container} ${styles.marginBottom500}`}>
      <div className={styles.label}>Mortgage Type</div>
      <div className={styles.choices}>
        <label
          className={`${styles.innerContainer} ${styles.alignCenter} ${styles.cursorPointer}`}
          htmlFor="repayment"
        >
          <div className={styles.circleDiv}>
            <input
              type="radio"
              value="repayment"
              id="repayment"
              {...register("type", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
          </div>
          <span className={`${styles.text} ${styles.choicesText}`}>
            Repayment
          </span>
        </label>
        <label
          className={`${styles.innerContainer} ${styles.alignCenter} ${styles.cursorPointer}`}
          htmlFor="interestOnly"
        >
          <div className={styles.circleDiv}>
            <input
              type="radio"
              value="Interest Only"
              id="interestOnly"
              {...register("type", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
          </div>

          <span className={`${styles.text} ${styles.choicesText}`}>
            Interest Only
          </span>
        </label>
      </div>
      <p className={styles.error}>
        {errors.type &&
          typeof errors.type?.message === "string" &&
          errors.type.message}
      </p>
    </div>
  );
}
