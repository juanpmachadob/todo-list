import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoListItem = ({
  todo,
  handleToggle,
  handleModify,
  handleDelete,
}) => {
  const [editMode, setEditMode] = useState(false);

  const [inputValue, handleInputChange, reset] = useForm(todo);

  const { task } = inputValue;

  const handleToggleEdit = (edit = false) => {
    if (edit) handleModify(inputValue);
    if (!edit) reset();
    setEditMode(!editMode);
  };

  return (
    <>
      {editMode ? (
        <li className="todo-list__item">
          <input
            className="todo-list__input"
            type="text"
            name="task"
            value={task}
            onChange={handleInputChange}
          />
          <div className="todo-list__buttons">
            <button className="todo-list__button" onClick={() => handleToggleEdit(true)}>Confirm</button>
            <button className="todo-list__button" onClick={() => handleToggleEdit(false)}>Cancel</button>
          </div>
        </li>
      ) : (
        <li className="todo-list__item">
          <p className={`todo-list__p ${todo.status ? "todo-list__p-completed" : ""}`}>{todo.task}</p>
          <div className="todo-list__buttons">
            <button className="todo-list__button" onClick={() => handleToggle(todo.id)}>Complete</button>
            <button className="todo-list__button" onClick={() => setEditMode(true)}>Edit</button>
            <button className="todo-list__button" onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </li>
      )}
    </>
  );
};
