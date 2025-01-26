import styles from "../styles/Amount.module.css";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function Amount() {
  const [isFocused, setIsFocused] = useState(false);
  const form = useFormContext();
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const amountValue = watch("amount");

  if (amountValue) {
    let sanitizedValue = amountValue
      .replace(/[^0-9.]/g, "")
      .replace(/^0[^.]/, "")
      .replace(/(\..*)\./g, "$1");

    if (sanitizedValue !== amountValue) {
      setValue("amount", sanitizedValue);
    }
  }
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="amount">
        Mortgage Amount
      </label>
      <div
        className={`${styles.innerContainer} ${
          errors.amount?.message ? styles.errorBorder : ""
        } ${isFocused ? styles.inputFocused : ""}`}
      >
        <div
          className={`${styles.text} ${
            errors.amount?.message ? styles.errorText : ""
          } ${isFocused ? styles.textFocused : ""}`}
        >
          £
        </div>
        <input
          type="text"
          className={styles.input}
          id="amount"
          {...register("amount", {
            required: { value: true, message: "This field is Required" },
            validate: {
              minmun: (fieldValue) =>
                fieldValue > 0 || "Enter Number greater than zero",
            },
          })}
          onFocus={(e) => {
            setIsFocused(true);
            form.setValue("amount", e.target.value, { shouldTouch: true });
          }}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {errors.amount && typeof errors.amount.message === "string" && (
        <p className={styles.error}>{errors.amount.message}</p>
      )}
    </div>
  );
}
