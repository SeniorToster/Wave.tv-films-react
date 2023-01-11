const url = 'https://kinopoiskapiunofficial.tech';
const fetchParameters = {
  method: 'GET',
  headers: {
    'X-API-KEY': 'fcd897c6-5cf1-4338-a96b-58135de60eff',
    'Content-Type': 'application/json',
  },
};

const getResultsSearch = async params => {
  const response = await fetch(
    `${url}/api/v2.2/films?${new URLSearchParams(params)}`,
    fetchParameters
  );
  return await response.json();
};

const getMovie = async idMovie => {
  const response = await fetch(
    `${url}/api/v2.2/films/${idMovie}`,
    fetchParameters
  );
  return await response.json();
};

const getMovieBoxOffice = async idMovie => {
  const response = await fetch(
    `${url}/api/v2.2/films/${idMovie}/box_office`,
    fetchParameters
  );
  return await response.json();
};

const getListCountriesGenders = async params => {
  const response = await fetch(
    `${url}/api/v2.2/films/filters`,
    fetchParameters
  );
  return await response.json();
};

const getMovieActors = async idMovie => {
  const response = await fetch(
    `${url}/api/v1/staff?filmId=${idMovie}`,
    fetchParameters
  );
  return await response.json();
};

const getActor = async idActor => {
  const response = await fetch(
    `${url}/api/v1/staff/${idActor}`,
    fetchParameters
  );
  return await response.json();
};

const getMovieFacts = async idMovie => {
  const response = await fetch(
    `${url}/api/v2.2/films/${idMovie}/facts`,
    fetchParameters
  );
  return await response.json();
};

export {
  getActor,
  getResultsSearch,
  getListCountriesGenders,
  getMovie,
  getMovieBoxOffice,
  getMovieActors,
  getMovieFacts,
};
