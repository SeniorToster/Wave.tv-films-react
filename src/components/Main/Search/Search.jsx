import { useState } from 'react';
import styles from './Search.module.scss';

function Search({ searchHandle }) {
  const [text, setText] = useState('');
  const submitHandle = e => {
    e.preventDefault();
    searchHandle(text);
  };

  return (
    <form onSubmit={submitHandle} className={styles.form}>
      <label className={styles.form__wrapperInput}>
        <input
          placeholder='Введите название фильма'
          type='search'
          className={styles.form__input}
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <button className={styles.form__button}>найти</button>
      </label>
      <label></label>
    </form>
  );
}

export default Search;
