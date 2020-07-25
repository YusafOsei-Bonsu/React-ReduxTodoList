import React from 'react';
import Header from '../components/Header.jsx';
import TodoForm from '../components/TodoForm.jsx';
import '../styles/App.css';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <TodoForm />
      </div>
    );
  }

}

export default App;
