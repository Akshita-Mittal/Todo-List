import React from 'react';

export const Form = ({inputText, setInputText, todos, setTodos}) => {

const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
}    
const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, 
        {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText("");
}; 


    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Enter Task" />
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
            <i className="fa fa-plus-square" aria-hidden="true"></i>
            </button>
        </form>
    )
}

