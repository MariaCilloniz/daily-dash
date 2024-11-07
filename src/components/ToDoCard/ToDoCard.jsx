import React, { useState } from "react";
import { deleteTask } from "../../api/taskApi";
import "./ToDoCard.scss";

function ToDoCard({ text, id, onTaskDeleted }) {
  const [isDone, setIsDone] = useState(false);
  const categories = [
    "School",
    "Home",
    "Health",
    "Fitness",
    "Work",
    "Personal",
  ];

  const handleDelete = async () => {
    try {
      await deleteTask(id);
        onTaskDeleted(id);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="todo-card--container">
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
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      </div>
    </div>
  );
}

export default ToDoCard;
