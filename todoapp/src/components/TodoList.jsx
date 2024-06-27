import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div>
      {" "}
      {todos.map((items) => (
        <TodoItem key={items} item={items} />
      ))}
    </div>
  );
}
