import styles from "../styles/MainContent.module.css";

type MainContentProps = {
  children: React.ReactNode;
};

function MainContent({ children }: MainContentProps) {
  return <main className={styles.main}>{children}</main>;
}

export default MainContent;
