import { useEffect, useContext } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { BsFilterLeft } from 'react-icons/bs';
import { getListCountriesGenders } from '../../../../api';
import { MoviesContext } from '../../../../Context/Context';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styles from './Filters.module.scss';

const ages = ['2022', '2021', '2020', '2019', '2018', '2017', '2015'];
const rating = ['10-9', '9-8', '8-7', '7-6', '6-5', '5-4'];

function Filters() {
  const {
    countries,
    genres,
    inputValueCountry,
    inputValueGenre,
    inputValueAge,
    addListCountriesGenders,
    handleSelectGenre,
    inputValueRating,
    handleSelectCountry,
    handleSelectAge,
    handleSelectRating,
  } = useContext(MoviesContext);

  useEffect(() => {
    getListCountriesGenders()
      .then(json => addListCountriesGenders(json))
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, []);

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
