import React from 'react';
import styles from './InputCreateTodo.module.css';

const InputCreateTodo = () => {
    return (
        <div className={styles.inputWrap}>
            <input type="text" placeholder='Add Todo' />
            <button className={styles.completeBtn}>Add</button>
        </div>
    );
};

export default InputCreateTodo;