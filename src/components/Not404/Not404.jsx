import { useEffect } from 'react';
import styles from './Not404.module.scss';

function Not404() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={styles.wrapper}>Такой страницы не существует</div>;
}

export default Not404;
