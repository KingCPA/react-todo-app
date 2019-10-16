import React, { Component } from 'react';
import './App.css';
import Todos from './todos';

class App extends Component {

  render() {
  return (
    <div className="container">
      <h1 className="text-center">Todo App in ReactJS</h1>
       <Todos />
    </div>
  );
  }
}



export default App;
