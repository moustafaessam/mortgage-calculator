import { useFormContext } from "react-hook-form";
import styles from "../styles/Form.module.css";
import type { FormInput } from "../App";
import { DevTool } from "@hookform/devtools";

type FormProps = {
  children: React.ReactNode;

  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

function Form({ children, setSubmit }: FormProps) {
  const form = useFormContext<FormInput>();
  const { control, handleSubmit } = form;
  function onSubmit(data: FormInput) {
    console.log(data);
    setSubmit(true);
  }
  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {children}
      </form>
      <DevTool control={control} />
    </>
  );
}

export default Form;
