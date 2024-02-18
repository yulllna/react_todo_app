import Button from './components/Button';
import { useState, useEffect } from 'react';
import DarkModeButton from './components/DarkModeButton';
import TodoItem from './components/TodoItem';
import InputCreateTodo from './components/InputCreateTodo';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import styles from './AppTodo.module.css';
import { DarkModeProvider } from './context/DarkModeContext';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  const [buttonList, setButtonList] = useState([
    { name: 'All', isSelect: true },
    { name: 'Active', isSelect: false },
    { name: 'Completed', isSelect: false }
  ]);

  const [todoList, setTodoList] = useState([
    // {
    //   text: 'init', isCheck: false, id: 0
    // }
  ]);

  const updateTodoList = (id) => {
    setTodoList(prev => {
      const updatedList = prev.map(todo => {
          if (todo.id === id) {
              return {
                  ...todo,
                  isCheck: !todo.isCheck
              };
          }
          return todo;
      });

      localStorage.setItem('todoList', JSON.stringify(updatedList));
      return updatedList;
  });
};

const deleteTodoItem = (id) => {
  setTodoList(prev => {
    const updatedList = prev.filter(todo => todo.id !== id);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
    return updatedList;
});
}

useEffect(() => {
  if (localStorage.todoList){
    setTodoList(prevTodoList => {
      const updatedList = JSON.parse(localStorage.todoList);
      return updatedList;
    });
  }
}, []);

  return (
    <DarkModeProvider>
      <GlobalStyle />
      <div className={styles.appTodo}>
        <div className={styles.appTodoWrap}>
          <header className={styles.appHeader}>
            <DarkModeButton isDark={true}/>
            <div className={styles.buttonWrap}>
              {buttonList.map(button => {
                return <Button isSelect={button.isSelect} name={button.name} key={button.name} setButtonList={setButtonList} buttonList={buttonList} />
              })}
            </div>
          </header>
          <div className={styles.todoList}>
            {todoList
              .filter(todoItem => {
                const selectedButton = buttonList.find(button => button.isSelect)?.name;
                if (selectedButton === 'Active') {
                    return !todoItem.isCheck;
                } else if (selectedButton === 'Completed') {
                    return todoItem.isCheck;
                } else {
                    return true;
                }
              })
              .map(todoItem => {
                return <TodoItem isCheck={todoItem.isCheck} text={todoItem.text} key={todoItem.id} id={todoItem.id} updateTodoList={updateTodoList}deleteTodoItem={deleteTodoItem}/>
              })
            }
          </div>
          <InputCreateTodo totalTodoList={todoList} setTotalTodoList={setTodoList}/>
        </div>
      </div>
    </ DarkModeProvider>
  );
}

export default App;
