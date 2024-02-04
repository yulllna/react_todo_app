import React, {useState} from 'react';
import styles from './InputCreateTodo.module.css';

const InputCreateTodo = ({totalTodoList, setTotalTodoList}) => {
    const [todoText, setTodoText] = useState('')
    const setAddLocalStorageData = () => {
        let data = {
            text: todoText, isCheck: false, id: totalTodoList.length - 1
        }
        setTotalTodoList(prevTodoList => {
            const newTodoList = [...prevTodoList, data];
            localStorage.setItem('todoList', JSON.stringify(newTodoList));
            console.log(JSON.parse(localStorage.todoList));
            return newTodoList;
          });
        
          setTodoText('');
    }

    return (
        <div className={styles.inputWrap}>
            <input type="text" placeholder='Add Todo' onChange={(e)=>{
                setTodoText(e.target.value);
                console.log(e.target.value)
                }} />
            <button className={styles.completeBtn} onClick={setAddLocalStorageData}>Add</button>
        </div>
    );
};

export default InputCreateTodo;