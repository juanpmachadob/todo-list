import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoContext } from "./todoContext";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoClearCompleted } from "./TodoClearCompleted";
import { initialData } from "../consts/initialData";

export const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <main className="card">
        <h1 className="card__title">Todo List</h1>
        <TodoAdd />
        <hr />
        <TodoList />
        <TodoClearCompleted />
      </main>
    </TodoContext.Provider>
  );
};
