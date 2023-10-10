import React, { useState } from "react";
import "./styles.css";

export const Todoadd = ({ onAddSuccess, todo, isEditing, editingTodoId }) => {
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
      id: 0, // Możesz zmienić to na aktualne ID podczas edycji
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
      <div className="todo-add-title">
        <h3>Title</h3>
        <input
          type="text"
          className="todo-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="todo-add-author">
        <h3>Author</h3>
        <input
          type="text"
          className="todo-author-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="todo-add-note">
        <h3>Note</h3>
        <input
          type="text"
          className="todo-note-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="todo-add-buttons">
        <button className="todo-return-button">Cancel</button>
        <button className="todo-add-add-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};