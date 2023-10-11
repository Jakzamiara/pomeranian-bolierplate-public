import { Editicon, Greentic, Ticicon, Trashicon } from "./Todo-icons";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const Todoelement = ({ todo, onDelete, onEdit }) => {
  // Initialize isDone and doneDate from local storage or set to defaults
  const [isDone, setIsDone] = useState(() => {
    const savedIsDone = localStorage.getItem(`todo-${todo.id}-isDone`);
    return savedIsDone ? JSON.parse(savedIsDone) : false;
  });

  const [doneDate, setDoneDate] = useState(() => {
    const savedDate = localStorage.getItem(`todo-${todo.id}-doneDate`);
    return savedDate ? new Date(savedDate) : null;
  });

  useEffect(() => {
    // Save isDone and doneDate to local storage whenever they change
    localStorage.setItem(`todo-${todo.id}-isDone`, JSON.stringify(isDone));
    if (doneDate) {
      localStorage.setItem(`todo-${todo.id}-doneDate`, doneDate.toISOString());
    } else {
      localStorage.removeItem(`todo-${todo.id}-doneDate`);
    }
  }, [isDone, doneDate, todo.id]);

  const handleTicClick = () => {
    setIsDone(!isDone);
    if (!isDone) {
      const now = new Date();
      setDoneDate(now);
    } else {
      setDoneDate(null);
    }
  };

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
    if (!isoDate) return "";
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  };

  return (
    <div className={`todo-element ${isDone ? "done" : ""}`}>
      <div className="todo-control-buttons">
        <h2 className="todo-title">{todo.title}</h2>
        <div className="todo-author">
          <p className="todo-name">{todo.author}</p>
          <p className="todo-date">{formatDate(todo.createdAt)}</p>
        </div>
        <p className="todo-text">{todo.note}</p>
      </div>
      <div className="todo-right-side">
        <button className="todo-vector" onClick={handleTicClick}>
          <Ticicon />
        </button>
        <button className="todo-edit" onClick={() => onEdit(todo.id)}>
          <Editicon />
        </button>
        <button className="todo-trash" onClick={deleteTodo}>
          <Trashicon />
        </button>
        {isDone && (
          <div className="todo-green-tick">
            <Greentic />
            <p className="todo-done-date">{formatDate(doneDate)}</p>
          </div>
        )}
      </div>
    </div>
  );
};
