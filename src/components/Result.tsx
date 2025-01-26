import styles from "../styles/Result.module.css";

type ResultProps = {
  children: React.ReactNode;
};

function Result({ children }: ResultProps) {
  return <section className={styles.result}>{children}</section>;
}

export default Result;
