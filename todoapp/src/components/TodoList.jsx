import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {" "}
      {sortedTodos.map((items) => (
        <TodoItem
          key={items.name}
          item={items}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
