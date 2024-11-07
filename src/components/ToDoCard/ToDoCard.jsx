import React, { useState } from 'react';

function ToDoCard({ text, onDelete }) {
    const [isDone, setIsDone] = useState(false);
    return (
        <div className="todo-card">
            <h3 className={`todo-title ${isDone ? 'done' : ''}`}>
                {text}
            </h3>
            <div className="circle-container">
                <div className="circle-1" />
                <div className="circle-2" />
            </div>

            {/* category */}

            <div
                onClick={() => setIsDone(!isDone)}
                className="status-toggle"
            >
                {isDone ? '✓ Done' : '◯ Todo'}
            </div>
            <button
                onClick={onDelete}
                className="delete-button"
            >
                Delete
            </button>


        </div>
    );
}

export default ToDoCard
