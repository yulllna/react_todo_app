import { React } from 'react';

export default function Buttons(props) {
    const {isSelect, name} = props;

    return (
      <div className='button'>
        <button className={isSelect? 'active' : ''}>{name}</button>
      </div>
    );
}
