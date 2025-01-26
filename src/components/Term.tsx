import styles from "../styles/Term.module.css";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function Term() {
  const [isFocused, setIsFocused] = useState(false);
  const form = useFormContext();
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const termValue = watch("term");

  if (termValue) {
    let sanitizedValue = termValue
      .replace(/[^0-9.]/g, "")
      .replace(/^0[^.]/, "")
      .replace(/(\..*)\./g, "$1");

    if (sanitizedValue !== termValue) {
      setValue("term", sanitizedValue);
    }
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="term">
        Mortgage Term
      </label>
      <div
        className={`${styles.innerContainer} ${
          errors.term?.message ? styles.errorBorder : ""
        } ${isFocused ? styles.inputFocused : ""}`}
      >
        <input
          type="text"
          className={styles.input}
          id="term"
          {...register("term", {
            required: { value: true, message: "This field is required" },
            validate: {
              minmum: (fieldValue) =>
                fieldValue > 0 || "Entter a number greater than zero",
            },
          })}
          onFocus={(e) => {
            setIsFocused(true);
            form.setValue("term", e.target.value, { shouldTouch: true });
          }}
          onBlur={() => setIsFocused(false)}
        />
        <div
          className={`${styles.text} ${
            errors.term?.message ? styles.errorText : ""
          } ${isFocused ? styles.textFocused : ""}`}
        >
          years
        </div>
      </div>
      {errors.term && typeof errors.term.message === "string" && (
        <p className={styles.error}>{errors.term.message}</p>
      )}
    </div>
  );
}
