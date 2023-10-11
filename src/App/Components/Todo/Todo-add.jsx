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
      </div>
    </div>
  );
};
