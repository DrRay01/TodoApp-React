import styles from "./footer.module.css";
export default function Footer({ comopletedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Todos : {totalTodos}</span>
      <span className={styles.item}>Comopleted Todos : {comopletedTodos}</span>
    </div>
  );
}
