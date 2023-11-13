import React from 'react';
import { BiRun } from 'react-icons/bi';
import ButtonContainer from './ButtonContainer';
import styles from './buttons.module.scss'; 

function FloatingButton() {
  return (
    <ButtonContainer className={styles.button_floating}>
      <BiRun className={styles.icon} />
    </ButtonContainer>
  );
}

export default FloatingButton;
