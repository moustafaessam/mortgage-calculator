import styles from "../styles/TermAndAmountContainer.module.css";

type TermAndAmountContainerProps = {
  children: React.ReactNode;
};

export default function TermAndAmountContainer({
  children,
}: TermAndAmountContainerProps) {
  return <div className={styles.termAndRate}>{children}</div>;
}
