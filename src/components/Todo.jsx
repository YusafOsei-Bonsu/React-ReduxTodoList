import React from 'react';
import { connect } from 'react-redux';
import "../styles/Todo.css";

class Todo extends React.Component {

    render() {
        const { task } = this.props;
        return (
            <div className="todo-item">
                <p>{ task }</p>
                <button className="btn btn-danger">Remove</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch({ type: "DELETE_TODO", id })
    }
}

export default connect(null, mapDispatchToProps)(Todo);