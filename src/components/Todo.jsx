import React from 'react';
import "../styles/Todo.css";

const Todo = ({ task }) => {
    let date = Date.now();
    let currentDate = date.toString();

    return (
        <div className="todo-item">
            <p>{ task }</p>
            <p>Date added: { currentDate }</p>
        </div>
    );
}

export default Todo;