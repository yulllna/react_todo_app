import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import DarkModeButton from './components/DarkModeButton';
import TodoItem from './components/TodoItem';
import InputCreateTodo from './components/InputCreateTodo';

function App() {
  const buttonList = [
    { name: 'All', isSelect: true },
    { name: 'Active', isSelect: false },
    { name: 'Completed', isSelect: false }
  ];

  const [todoList, setTodoList] = useState([
    {
      text: 'init', isCheck: false, id: 0}
  ]);

  const handleDelete = (key) => setTodoList(todoList.filter(todoItem => todoItem.id !== key));

  return (
    <div className="app-todo">
      <header className='app-header'>
        <DarkModeButton isDark={true}/>
        <div className='button-wrap'>
          {buttonList.map(button => {
            return <Button isSelect={button.isSelect} name={button.name} />
          })}
        </div>
      </header>
      <div className='todo-list'>
        {todoList.map(todoItem => {
          return <TodoItem isCheck={todoItem.isCheck} text={todoItem.text} key={todoItem.id} onDelete={handleDelete}/>
        })}
      </div>
      <InputCreateTodo/>
    </div>
  );
}

export default App;
