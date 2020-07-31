import React from 'react';
import Header from '../components/Header.jsx';
import TodoForm from '../components/TodoForm.jsx';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    );
  }

}

export default App;
