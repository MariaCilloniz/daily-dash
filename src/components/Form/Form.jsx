import React from 'react'
import { useState } from 'react';
import ToDoCard from '../../components/ToDoCard/ToDoCard'


function Form() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText) {
            setTodos([...todos, inputText]);
            setInputText('');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter your text here..."
                        className="input-textarea"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Add
                </button>
            </form>

            <div className="todos-container">
                {todos.map((todo, index) => (
                    <ToDoCard key={index} text={todo} />
                ))}
            </div>
        </div>
    );
}

export default Form