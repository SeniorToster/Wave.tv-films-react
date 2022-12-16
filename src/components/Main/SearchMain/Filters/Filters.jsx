import { useState, useEffect } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { BsFilterLeft } from 'react-icons/bs';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styles from './Filters.module.scss';

const ages = ['2022', '2021', '2020', '2019', '2018', '2017', '2015'];
const rating = ['10-9', '9-8', '8-7', '7-6', '6-5', '5-4'];

function Filters({ filters, setFilters }) {
  const [inputValueCountry, setInputValueCountry] = useState('');
  const [inputValueGenre, setInputValueGenre] = useState('');
  const [inputValueAge, setInputValueAge] = useState('');
  const [inputValueRating, setInputValueRating] = useState('');
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '7dba1128-8e80-4faa-9e12-e23096e28987',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        setGenres(
          json.genres.map(genre => ({ label: genre.genre, id: genre.id }))
        );
        setCountries(
          json.countries.map(country => ({
            label: country.country,
            id: country.id,
          }))
        );
      })
      .catch(err => console.log(err));
  }, []);

  const handleSelectGenre = (e, newValueGenre) => {
    setInputValueGenre(newValueGenre);

    if (newValueGenre) {
      const newIdGenre = genres.filter(
        genre => genre.label === newValueGenre
      )[0].id;

      setFilters({ ...filters, genres: newIdGenre });
    } else {
      setFilters({ ...filters, genres: '' });
    }
  };

  const handleSelectCountry = (e, newValueCountry) => {
    setInputValueCountry(newValueCountry);

    if (newValueCountry) {
      const newIdCountry = countries.filter(
        country => country.label === newValueCountry
      )[0].id;

      setFilters({ ...filters, countries: newIdCountry });
    } else {
      setFilters({ ...filters, countries: '' });
    }
  };

  const handleSelectAge = (e, newValueAge) => {
    setInputValueAge(newValueAge);

    if (newValueAge) {
      setFilters({ ...filters, yearFrom: newValueAge, yearTo: newValueAge });
    } else {
      setFilters({ ...filters, yearFrom: '', yearTo: '' });
    }
  };

  const handleSelectRating = (e, newValueRating) => {
    setInputValueRating(newValueRating);

    if (newValueRating) {
      const arrRating = newValueRating.split('-');

      setFilters({
        ...filters,
        ratingTo: arrRating[0],
        ratingFrom: arrRating[1],
      });
    } else {
      setFilters({
        ...filters,
        ratingTo: '',
        ratingFrom: '',
      });
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<IoChevronDown />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <div className={styles.accordionText}>
          <BsFilterLeft />
          <p>Фильтры</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.wrapper}>
          <Autocomplete
            sx={{ width: 250 }}
            inputValue={inputValueGenre}
            onInputChange={handleSelectGenre}
            options={genres}
            renderInput={params => <TextField {...params} label='Жанр' />}
          />
          <Autocomplete
            sx={{ width: 250 }}
            inputValue={inputValueCountry}
            onInputChange={handleSelectCountry}
            options={countries}
            renderInput={params => <TextField {...params} label='Страна' />}
          />
          <Autocomplete
            sx={{ width: 250 }}
            inputValue={inputValueAge}
            onInputChange={handleSelectAge}
            options={ages}
            renderInput={params => <TextField {...params} label='Год' />}
          />
          <Autocomplete
            sx={{ width: 250 }}
            inputValue={inputValueRating}
            onInputChange={handleSelectRating}
            options={rating}
            renderInput={params => <TextField {...params} label='Рейтинг' />}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default Filters;
