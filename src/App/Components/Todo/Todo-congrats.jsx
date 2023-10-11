import "./styles.css";
export const Todocongrats = () => {
  return (
    <div className="todo-congrats-container">
      <p className="todo-congrats-text">
        Nie masz aktualnie żadnych zadań do zrealizowania.
      </p>
      <button className="todo-congrats-add" />
    </div>
  );
};
