import React, { useState } from 'react';
import { deleteTask } from '../../api/taskApi';

function ToDoCard({ text, id, onTaskDeleted }) {
    const [isDone, setIsDone] = useState(false);
  
    const handleDelete = async () => {
      try {
        await deleteTask(id);
        onTaskDeleted(id);  
      } catch (error) {
        console.error('Failed to delete task:', error);
      }
    };
  
    return (
      <div className="todo-card">
        <h3 className={`todo-title ${isDone ? 'done' : ''}`}>
          {text}
        </h3>
        <div className="circle-container">
          <div className="circle-1" />
          <div className="circle-2" />
        </div>
  
        <div
          onClick={() => setIsDone(!isDone)}
          className="status-toggle"
        >
          {isDone ? '✓ Done' : '◯ Todo'}
        </div>
        <button
          onClick={handleDelete}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    );
  }
  

export default ToDoCard
