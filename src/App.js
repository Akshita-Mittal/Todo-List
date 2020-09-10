import React, {useState} from 'react';
import './App.css';
import { Form } from './Components/Form';
import { TodoList } from './Components/TodoList';


function App() {

const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="container">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
