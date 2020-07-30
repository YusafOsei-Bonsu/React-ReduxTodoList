import React from 'react';
import { connect } from 'react-redux';
import "../styles/Todo.css";

class Todo extends React.Component {
    
    // Dispatches an action to delete to-do item
    handleClick = () => this.props.deleteTodo(this.props.id);

    render() {
        const { task } = this.props;
        return (
            <div className="todo-item">
                <p>{ task }</p>
                <button className="btn btn-danger" onClick={this.handleClick}>Complete</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (todoId) => {
            dispatch({ type: "DELETE_TODO", id: todoId })
        }
    }
}

export default connect(null, mapDispatchToProps)(Todo);