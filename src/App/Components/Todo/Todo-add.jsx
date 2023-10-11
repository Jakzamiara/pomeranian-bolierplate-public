import React, { useState } from "react";
import "./styles.css";
import { CrownEmo, Greentic, HappyEmo, WriteEmo } from "./Todo-icons";

export const Todoadd = ({
  onAddSuccess,
  todo,
  isEditing,
  editingTodoId,
  onReturn,
}) => {
  const [title, setTitle] = useState(todo ? todo.title : "");
  const [author, setAuthor] = useState(todo ? todo.author : "");
  const [note, setNote] = useState(todo ? todo.note : "");

  const handleSubmit = async () => {
    if (!title || !author || !note) {
      alert("All fields must be filled out");
      return;
    }
    const currentDate = new Date().toISOString();
    const payload = {
      id: 0,
      title,
      createdAt: currentDate,
      author,
      isDone: true,
      note,
      doneDate: currentDate,
    };

    const url = isEditing
      ? `http://localhost:3333/api/todo/${editingTodoId}`
      : "http://localhost:3333/api/todo";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        onAddSuccess(payload);
      } else {
        console.log("Failed to send data");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="todo-add-container">
      <h2 className="todo-todo">TODO</h2>
      <p className="todo-adding-exercise">Dodawanie zadania</p>
      <div className="todo-add-title">
        <h3 className="todo-authot-headline">
          Tytuł <CrownEmo />
        </h3>
        <input
          placeholder="Twój tytuł."
          type="text"
          className="todo-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {!isEditing && (
        <div className="todo-add-author">
          <h3 className="todo-authot-headline">
            Autor {"   "} <HappyEmo />
          </h3>
          <input
            placeholder="Imie autora."
            type="text"
            className="todo-author-input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
      )}
      <div className="todo-add-note">
        <h3 className="todo-authot-headline">
          Treść
          <WriteEmo />{" "}
        </h3>
        <textarea
          placeholder="Opisz swoje zadanie."
          className="todo-note-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="todo-add-buttons">
        <button className="todo-return-button" onClick={onReturn}>
          Cofnij
        </button>
        <button className="todo-add-add-button" onClick={handleSubmit}>
          Dodaj
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="30"
          viewBox="0 0 45 30"
          fill="none"
        >
          Gr
          <path
            d="M15.9375 30C15.6912 30.0003 15.4473 29.952 15.2198 29.8577C14.9923 29.7635 14.7856 29.6252 14.6117 29.4509L1.48584 16.326C1.3117 16.1519 1.17357 15.9453 1.07932 15.7178C0.985066 15.4903 0.936545 15.2465 0.936523 15.0002C0.936502 14.754 0.984982 14.5101 1.07919 14.2826C1.17341 14.0551 1.31151 13.8484 1.48561 13.6743C1.65971 13.5001 1.86641 13.362 2.09389 13.2678C2.32138 13.1735 2.56521 13.125 2.81145 13.125C3.05769 13.1249 3.30152 13.1734 3.52902 13.2676C3.75652 13.3618 3.96324 13.4999 4.13738 13.6741L15.9375 25.4731L40.8632 0.548308C41.2149 0.197058 41.6917 -0.000160776 42.1888 9.83439e-08C42.6859 0.000160973 43.1626 0.197689 43.5141 0.549166C43.8656 0.900644 44.0632 1.37731 44.0634 1.8744C44.0636 2.37148 43.8664 2.84831 43.5152 3.20008L17.2635 29.4509C17.0895 29.6252 16.8828 29.7635 16.6552 29.8577C16.4277 29.9519 16.1838 30.0003 15.9375 30Z"
            fill="#07C23B"
          />
        </svg>
      </div>
    </div>
  );
};
