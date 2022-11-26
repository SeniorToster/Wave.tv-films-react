import { useEffect, useState } from 'react';
import Movies from './Movies/Movies';
import Search from './Search/Search';
import styles from './Main.module.scss';

const newYear = new Date().getFullYear();
const newMonth = new Date().getMonth();
const stringMonth =
  'January,February,March,April,May,June,July,August,September,October,November,December,';
const ArrMonth = stringMonth.toUpperCase().split(',');

function Main() {
  const [movies, setMovies] = useState([]);

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
      .then(json => setMovies(json.items))
      .catch(err => console.log(err));
  }, []);

  const searchHandle = text => {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${text}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': '7dba1128-8e80-4faa-9e12-e23096e28987',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(json => setMovies(json.items))
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <Search searchHandle={searchHandle} />
      <Movies movies={movies} />
    </div>
  );
}

export default Main;
