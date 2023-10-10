export const Todoadd = () => {
  return (
    <div className="todo-add-container">
      <div className="todo-add-title">
        <h3>Tytuł</h3>
        <input type="text" className="todo-title-input"></input>
      </div>
      <div className="todo-add-title">
        <h3>Autor</h3>
        <input type="text" className="todo-title-input"></input>
      </div>
      <div className="todo-add-title">
        <h3>Treść</h3>
        <input type="text" className="todo-title-input"></input>
      </div>
      <div className="todo-add-buttons">
        <button className="todo-return-button"></button>
        <button className="todo-add-add-button"></button>
      </div>
    </div>
  );
};
