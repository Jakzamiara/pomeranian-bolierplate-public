import React, { useState } from "react";
import "./styles.css";
import { Todoelement } from "./Todo-element";
import { Todoadd } from "./Todo-add"; // Assuming Todoadd is in Todo-add.jsx

export const Todo = () => {
  const [showTodoAdd, setShowTodoAdd] = useState(false);

  return (
    <div className="app-container">
      {!showTodoAdd && (
        <div className="main-todo-view">
          <h2 className="todo-todo">TODO</h2>
          <div className="todo-add">
            <p className="todo-intro">Tutaj znajdziesz listę swoich zadań.</p>
            <button
              className="todo-add-button"
              onClick={() => setShowTodoAdd(true)}
            >
              +
            </button>
          </div>
          <Todoelement />
          <Todoelement />
          <Todoelement />
        </div>
      )}
      {showTodoAdd && <Todoadd />}
    </div>
  );
};
