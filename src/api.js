const newYear = new Date().getFullYear();
const newMonth = new Date().getMonth();
const stringMonth =
  'January,February,March,April,May,June,July,August,September,October,November,December,';
const ArrMonth = stringMonth.toUpperCase().split(',');
const fetchParameters = {
  method: 'GET',
  headers: {
    'X-API-KEY': 'fcd897c6-5cf1-4338-a96b-58135de60eff',
    'Content-Type': 'application/json',
  },
};

const getPremieres = async () => {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${newYear}&month=${ArrMonth[newMonth]}`,
    fetchParameters
  );
  return await response.json();
};

const getResultsSearch = async params => {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films?${new URLSearchParams(
      params
    )}`,
    fetchParameters
  );
  return await response.json();
};

const getMovie = async idMovie => {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${idMovie}`,
    fetchParameters
  );
  return await response.json();
};

const getMovieBoxOffice = async idMovie => {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${idMovie}/box_office`,
    fetchParameters
  );
  return await response.json();
};

const getListCountriesGenders = async params => {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`,
    fetchParameters
  );
  return await response.json();
};

export {
  getPremieres,
  getResultsSearch,
  getListCountriesGenders,
  getMovie,
  getMovieBoxOffice,
};
