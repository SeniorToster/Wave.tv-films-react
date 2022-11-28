import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${newYear}&month=${ArrMonth[newMonth]}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'fcd897c6-5cf1-4338-a96b-58135de60eff',
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

  const searchHandle = (text, genre, country, age, rating) => {
    const textNew = text.trim();
    setLoading(true);

    const link = `https://kinopoiskapiunofficial.tech/api/v2.2/films?${
      country ? `countries=${country}&` : ''
    }${genre ? `genres=${genre}&` : ''}${
      rating ? `ratingFrom=${rating[2]}&ratingTo=${rating[0]}&` : ''
    }${age ? `yearFrom=${age}&yearTo=${age}&` : ''}${
      text ? `keyword=${textNew}` : ''
    }`;

    fetch(link, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'fcd897c6-5cf1-4338-a96b-58135de60eff',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        setMovies(json.items);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <Search searchHandle={searchHandle} />
      {loading ? <LinearProgress /> : <Movies movies={movies} />}
    </div>
  );
}

export default Main;
