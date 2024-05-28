// import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos, todo, setTodo }) {
  //   const [todo, setTodo] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button className={styles.todoButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
