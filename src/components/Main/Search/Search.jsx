import { useState } from 'react';
import React from 'react';
import styles from './Search.module.scss';
import AccordionFilter from './AccordionFilter';

function Search({ searchHandle }) {
  const [text, setText] = useState('');
  const [filtersData, setFiltersData] = useState({});

  const submitHandle = e => {
    e.preventDefault();
    searchHandle(text, filtersData);
    setText('');
  };

  const filtersHandle = filters => {
    setFiltersData(filters);
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
      <label>
        <AccordionFilter filtersHandle={filtersHandle} />
      </label>
    </form>
  );
}

export default Search;
