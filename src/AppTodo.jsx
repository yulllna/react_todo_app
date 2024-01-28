import Button from './components/Button';
import { useState } from 'react';
import DarkModeButton from './components/DarkModeButton';
import TodoItem from './components/TodoItem';
import InputCreateTodo from './components/InputCreateTodo';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import styles from './AppTodo.module.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

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
    <>
      <GlobalStyle />
      <div className={styles.appTodo}>
        <div className={styles.appTodoWrap}>
          <header className={styles.appHeader}>
            <DarkModeButton isDark={true}/>
            <div className={styles.buttonWrap}>
              {buttonList.map(button => {
                return <Button isSelect={button.isSelect} name={button.name} key={button.name} />
              })}
            </div>
          </header>
          <div className={styles.todoList}>
            {todoList.map(todoItem => {
              return <TodoItem isCheck={todoItem.isCheck} text={todoItem.text} key={todoItem.id} index={todoItem.id} onDelete={handleDelete}/>
            })}
          </div>
          <InputCreateTodo/>
        </div>
      </div>
    </>
  );
}

export default App;
