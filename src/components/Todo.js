import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoContext } from "./todoContext";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("todos")) || [
      {
        id: 12345,
        status: false,
        task: "Learn React",
      },
      {
        id: 54321,
        status: false,
        task: "Learn Node.js",
      },
    ]
  );
};

export const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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
      </main>
    </TodoContext.Provider>
  );
};
