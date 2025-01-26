import { useFormContext } from "react-hook-form";
import styles from "../styles/FormHeader.module.css";

type FormHeaderProps = {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

function FormHeader({ setSubmit }: FormHeaderProps) {
  const form = useFormContext();
  const { reset } = form;
  function handleSubmit() {
    reset();
    setSubmit(false);
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>Mortgage Calculator</div>
      <input
        type="reset"
        value="Clear All"
        className={styles.clear}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default FormHeader;
