import React, { useState } from 'react';

function ToDoCard({ text }) {
    const [isDone, setIsDone] = useState(false);
    return (
        <div className="todo-card">
            <h3 className={`todo-title ${isDone ? 'done' : ''}`}>
                {text}
            </h3>
            <div className="circle-container">
                <div className="circle pink" />
                <div className="circle blue" />
            </div>
            <div
                onClick={() => setIsDone(!isDone)}
                className="status-toggle"
            >
                {isDone ? '✓ Done' : '◯ Todo'}
            </div>
        </div>
    );
}

export default ToDoCard
