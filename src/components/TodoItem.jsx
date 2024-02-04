import React from 'react';
import styles from './TodoItem.module.css';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TodoItem = (props) => {
    const {isCheck, text, id, onDelete, index, updateTodoList} = props;

    const changeCheckState = () => {
        updateTodoList(id)
    }

    return (
        <div className={styles.todoItem}>
            <div className={styles.textWrap}>
                <div onClick={changeCheckState}>{isCheck ? <IoCheckbox/> : <MdCheckBoxOutlineBlank />}</div>
                <p className={styles.textContent}>{text}</p>
            </div>
            <div className='delete-icon' 
                onClick={() => {
                    onDelete(index);
                }}><RiDeleteBin5Fill color='#FFF' /></div>
        </div>
    );
};

export default TodoItem;