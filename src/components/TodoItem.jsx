import React from 'react';

const TodoItem = (props) => {
    const {isCheck, text, key, onDelete} = props;
    return (
        <div className='todo-item'>
            <div className='text-wrap'>
                <div className={'checkbox' + (isCheck ? ' checked' : '')}></div>
                <p className='text-content'>{text}</p>
            </div>
            <div className='delete-icon' 
                onClick={() => {
                    onDelete(key);
                }}>삭제</div>
        </div>
    );
};

export default TodoItem;