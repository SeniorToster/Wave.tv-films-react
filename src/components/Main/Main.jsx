import { useEffect, useState } from 'react';
import React from 'react';
import { LinearProgress } from '@mui/material';
import Movies from './Movies/Movies';
import SearchMain from './SearchMain/SearchMain';
import styles from './Main.module.scss';

const newYear = new Date().getFullYear();
const newMonth = new Date().getMonth();
const stringMonth =
  'January,February,March,April,May,June,July,August,September,October,November,December,';
const ArrMonth = stringMonth.toUpperCase().split(',');

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${newYear}&month=${ArrMonth[newMonth]}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': '7dba1128-8e80-4faa-9e12-e23096e28987',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.items);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearchData = params => {
    setLoading(true);
    console.log(params);
    Object.keys(params).forEach(param => {
      if (param === undefined) delete params[param];
    });

    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?${new URLSearchParams(
        params
      )}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': '7dba1128-8e80-4faa-9e12-e23096e28987',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.items);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <SearchMain handleSearchData={handleSearchData} />
      {loading ? <LinearProgress /> : <Movies movies={movies} />}
    </div>
  );
}

export default Main;
