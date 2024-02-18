import React from 'react';
import styles from './TodoItem.module.css';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TodoItem = (props) => {
    const {isCheck, text, id, updateTodoList, deleteTodoItem} = props;

    const changeCheckState = () => {
        updateTodoList(id)
    }

    const deleteItem = () => {
        deleteTodoItem(id)
    }

    return (
        <div className={styles.todoItem}>
            <div className={styles.textWrap}>
                <div onClick={changeCheckState}>{isCheck ? <IoCheckbox/> : <MdCheckBoxOutlineBlank />}</div>
                <p className={styles.textContent}>{text}</p>
            </div>
            <div className={styles.deleteIcon} 
                onClick={deleteItem}><RiDeleteBin5Fill color='var(--color-font-content)' /></div>
        </div>
    );
};

export default TodoItem;