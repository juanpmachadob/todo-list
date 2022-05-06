import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoContext } from "./todoContext";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoClearCompleted } from "./TodoClearCompleted";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("todos")) || [
      {
        id: 1,
        task: "Learn React",
        status: true,
      },
      {
        id: 2,
        task: "Learn Node.js",
        status: false,
      },
      {
        id: 3,
        task: "Learn Express",
        status: false,
      },
      {
        id: 4,
        task: "Learn Mongo DB",
        status: false,
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
        <TodoClearCompleted />
      </main>
    </TodoContext.Provider>
  );
};
