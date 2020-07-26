import React from 'react';
import { connect } from 'react-redux';
import "../styles/Todo.css";

const Todo = ({ key, task }) => {

    const removeTodo = () => {
        
    }
    
    return (
        <div className="todo-item">
            <p>{ task }</p>
            <button className="btn btn-danger" onClick={removeTodo}>Remove</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch({ type: "DELETE_TODO", id }),
    }
}

export default connect(null, mapDispatchToProps)(Todo);