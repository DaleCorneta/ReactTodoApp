import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function deleteHandler(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function clickHandler(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const complete = item.done ? styles.completed : "";
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemName}>
        <span className={complete} onClick={() => clickHandler(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => deleteHandler(item)}
            className={styles.deletBtn}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
