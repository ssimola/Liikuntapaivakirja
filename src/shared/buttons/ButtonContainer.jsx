import styles from './buttons.module.scss';
import clsx from 'clsx';
import { BiRun } from 'react-icons/bi'; 

function ButtonContainer({ className, children, icon, ...props }) {
  return (
    <div
      className={clsx(styles.button_container, className)}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </div>
  );
}

export { ButtonContainer as default, ButtonContainer };