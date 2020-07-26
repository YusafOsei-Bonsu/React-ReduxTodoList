import React from 'react';
import "../styles/Todo.css";

const Todo = ({ task }) => {
    return (
        <div className="todo-item">
            <p>{ task }</p>
        </div>
    );
}

export default Todo;