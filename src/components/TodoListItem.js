import { useState } from "react";
import { BiSave, BiBlock, BiPencil, BiTrash } from "react-icons/bi";
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
        <li
          className={`todo-list__item todo-list__item--editing ${
            todo.status ? "todo-list__item--completed" : ""
          }`}
        >
          <input
            autoComplete="off"
            className="todo-list__input"
            type="text"
            name="task"
            value={task}
            onChange={handleInputChange}
          />
          <div className="todo-list__buttons">
            <BiSave
              className="todo-list__button"
              onClick={() => handleToggleEdit(true)}
            />
            <BiBlock
              className="todo-list__button"
              onClick={() => handleToggleEdit(false)}
            />
          </div>
        </li>
      ) : (
        <li
          className={`todo-list__item ${
            todo.status ? "todo-list__item--completed" : ""
          }`}
        >
          <p className="todo-list__p" onClick={() => handleToggle(todo.id)}>{todo.task}</p>
          <div className="todo-list__buttons">
            <BiPencil
              className="todo-list__button"
              onClick={() => setEditMode(true)}
            />
            <BiTrash
              className="todo-list__button"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        </li>
      )}
    </>
  );
};
