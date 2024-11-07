import React, { useState } from "react";
import { deleteTask } from "../../api/taskApi";
import "./ToDoCard.scss";

function ToDoCard({ text, id, onTaskDeleted, tags }) {
  const [isDone, setIsDone] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      onTaskDeleted(id);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="todo-card">
      <h3 className={`todo-title ${isDone ? "done" : ""}`}>{text}</h3>

      <div className="tag-container">
        {tags.map((tag) => (
          <div className={`tag tag--${tag}`} />
        ))}
      </div>

      <div onClick={() => setIsDone(!isDone)} className="status-toggle">
        {isDone ? "✓ Done" : "◯ Todo"}
      </div>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default ToDoCard;
