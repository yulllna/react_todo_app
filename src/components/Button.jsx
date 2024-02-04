import { React } from 'react';
import styles from './Button.module.css';

export default function Buttons(props) {
    const {isSelect, name, setButtonList, buttonList} = props;

    const changeButtonList = (e) => {
      const updatedButtonList = buttonList.map(button => {
          return {
              ...button,
              isSelect: button.name === e.target.textContent
          };
      });

      setButtonList(updatedButtonList);
  }
    

    return (
      <button className={styles.topButton + (isSelect? styles.topButtonActive : '')} onClick={changeButtonList}>{name}</button>
    );
}
