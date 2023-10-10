import { Editicon, Ticicon, Trashicon } from "./Todo-icons";

export const Todoelement = ({ todo }) => {
  if (!todo) {
    return <div>Loading...</div>;
  }
  console.log(todo);
  return (
    <div className="todo-element">
      <div className="todo-control-buttons">
        <h2 className="todo-title">{todo.title}</h2>
        <button className="todo-vector">
          <Ticicon />
        </button>
        <button className="todo-edit">
          <Editicon />
        </button>
        <button className="todo-trash">
          <Trashicon />
        </button>
      </div>
      <div className="todo-author">
        <p className="todo-name">{todo.author}</p>
        <p className="todo-date">{todo.createdAt}</p>
      </div>
      <p className="todo-text">{todo.note}</p>
    </div>
  );
};
