import { useEffect, useReducer } from "react";
import { todoReducer } from "components/todoReducer";
import { TodoContext } from "components/todoContext";
import { TodoAdd } from "components/TodoAdd";
import { TodoList } from "components/TodoList";
import { TodoClearCompleted } from "components/TodoClearCompleted";
import { initialData } from "consts/initialData";

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
