import { Editicon, Ticicon, Trashicon } from "./Todo-icons";
import axios from "axios";

export const Todoelement = ({ todo, onDelete, onEdit }) => {
  if (!todo) {
    return <div>Loading...</div>;
  }

  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:3333/api/todo/${todo.id}`);
      onDelete(todo.id);
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month}.${year}, ${hours}.${minutes}`;
  };

  return (
    <div className="todo-element">
      <div className="todo-control-buttons">
        <h2 className="todo-title">{todo.title}</h2>
        <button className="todo-vector">
          <Ticicon />
        </button>
        <button className="todo-edit" onClick={() => onEdit(todo.id)}>
          <Editicon />
        </button>
        <button className="todo-trash" onClick={deleteTodo}>
          <Trashicon />
        </button>
      </div>
      <div className="todo-author">
        <p className="todo-name">{todo.author}</p>
        <p className="todo-date">{formatDate(todo.createdAt)}</p>
      </div>
      <p className="todo-text">{todo.note}</p>
    </div>
  );
};
