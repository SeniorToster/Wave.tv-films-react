import { useState } from 'react';
import React from 'react';
import styles from './Search.module.scss';
import AccordionFilter from './AccordionFilter';

export default React.memo(function Search({ searchHandle }) {
  const [text, setText] = useState('');
  let filters = { genre: '', country: '', age: '', rating: '' };

  const submitHandle = e => {
    e.preventDefault();
    const { genre, country, age, rating } = filters;
    searchHandle(text, genre, country, age, rating);
    setText('');
  };

  const filtersHandle = (genreNew, countryNew, ageNew, ratingNew) => {
    filters = {
      genre: genreNew,
      country: countryNew,
      age: ageNew,
      rating: ratingNew,
    };
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
});
