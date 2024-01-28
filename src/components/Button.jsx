import { React } from 'react';
import styles from './Button.module.css';

export default function Buttons(props) {
    const {isSelect, name} = props;

    return (
      <button className={styles.topButton + (isSelect? styles.topButtonActive : '')}>{name}</button>
    );
}
