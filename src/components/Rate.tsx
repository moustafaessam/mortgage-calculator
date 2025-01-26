import styles from "../styles/Rate.module.css";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function Rate() {
  const [isFocused, setIsFocused] = useState(false);
  const form = useFormContext();
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const rateValue = watch("rate");

  if (rateValue) {
    let sanitizedValue = rateValue
      .replace(/[^0-9.]/g, "")
      .replace(/^0[^.]/, "")
      .replace(/(\..*)\./g, "$1");

    if (sanitizedValue !== rateValue) {
      setValue("rate", sanitizedValue);
    }
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="rate">
        Interest Rate
      </label>
      <div
        className={`${styles.innerContainer} ${
          errors.rate?.message ? styles.errorBorder : ""
        }  ${isFocused ? styles.inputFocused : ""}`}
      >
        <input
          type="text"
          className={styles.input}
          id="rate"
          {...register("rate", {
            required: { value: true, message: "This field is required" },
            validate: {
              minmum: (fieldValue) =>
                fieldValue > 0 || "Enter a number greater than zero",
            },
          })}
          onFocus={(e) => {
            setIsFocused(true);
            form.setValue("rate", e.target.value, { shouldTouch: true });
          }}
          onBlur={() => setIsFocused(false)}
        />
        <div
          className={`${styles.text} ${
            errors.rate?.message ? styles.errorText : ""
          } ${isFocused ? styles.textFocused : ""}`}
        >
          %
        </div>
      </div>
      {errors.rate && typeof errors.rate.message === "string" && (
        <p className={styles.error}>{errors.rate.message}</p>
      )}
    </div>
  );
}
