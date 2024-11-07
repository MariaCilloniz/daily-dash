import React, { useState } from "react";

function ToDoCard({ text, onDelete }) {
  const [isDone, setIsDone] = useState(false);
  const categories = [
    "School",
    "Home",
    "Helath",
    "Fitness",
    "Work",
    "Personal",
  ];
  return (
    <div className="todo-card">
      <h3 className={`todo-title ${isDone ? "done" : ""}`}>{text}</h3>

      <div className="tag-container">
        {categories.map((category) => (
          <div className={`tag tag--${category}`} />
        ))}
      </div>

      <div onClick={() => setIsDone(!isDone)} className="status-toggle">
        {isDone ? "✓ Done" : "◯ Todo"}
      </div>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default ToDoCard;
