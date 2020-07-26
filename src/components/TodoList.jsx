import React from 'react';
import { connect } from 'react-redux';
import "../styles/TodoList.css";

class TodoList extends React.Component {
    
    render() {
        const { todos } = this.props;
        return (
            <div id="todo-container">
            {/* If the to-do list isn't empty, then display the to-do items. 
                Otherwise, inform the user that the list is empty.  */}
                {todos.length > 0 ? todos.map(todo => {
                    return (
                        <div>
                            <p>{todo.name}</p>
                        </div>
                    );
                }) : <p>No to-do items at the moment</p>}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);