import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo.jsx';
import "../styles/TodoList.css";

class TodoList extends React.Component {
    
    render() {
        const { todos } = this.props;
        return (
            <div id="todo-container">
            {/* If the to-do list isn't empty, then display the to-do items. 
                Otherwise, inform the user that the list is empty.  */}
                {todos.length > 0 ? todos.map(todo => {
                    return <Todo key={todo.id} task={todo.task} />
                }) : <h2 id="empty-list-txt">Your to-do list is empty!!</h2>}
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