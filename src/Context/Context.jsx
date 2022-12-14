import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const MoviesContext = createContext();

let favoriteLocal = [];
if (localStorage.favorites) {
  favoriteLocal = JSON.parse(localStorage.favorites);
}

const initialState = {
  moviePosterMain: '505898',
  moviesList: [],
  seriesList: [],
  inputValueSearch: '',
  inputValueCountry: '',
  inputValueGenre: '',
  inputValueAge: '',
  inputValueRating: '',
  genres: [],
  countries: [],
  searchQuery: {},
  favoritesList: favoriteLocal,
  isOpenAuth: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addListCountriesGenders = json => {
    dispatch({ type: 'ADD_LIST_COUNTRIES_GENDERS', payload: json });
  };

  value.handleSelectGenre = (e, newValueGenre) => {
    dispatch({ type: 'SET_GENRE', payload: newValueGenre });
  };

  value.handleSelectCountry = (e, newValueCountry) => {
    dispatch({ type: 'SET_COUNTRY', payload: newValueCountry });
  };

  value.handleSelectAge = (e, newValueAge) => {
    dispatch({ type: 'SET_AGE', payload: newValueAge });
  };

  value.handleSelectRating = (e, newValueRating) => {
    dispatch({ type: 'SET_RATING', payload: newValueRating });
  };

  value.handleInputSearch = e => {
    dispatch({ type: 'SET_SEARCH', payload: e });
  };

  value.updateMoviesList = newMovies => {
    dispatch({ type: 'SET_MOVIES', payload: newMovies });
  };

  value.updateSeriesList = newSeries => {
    dispatch({ type: 'SET_SERIES', payload: newSeries });
  };

  value.addFavoritesList = movieItem => {
    dispatch({ type: 'ADD_FAVORITES_LIST', payload: movieItem });
  };

  value.addMovie = movieItem => {
    dispatch({ type: 'ADD_MOVIE', payload: movieItem });
  };

  value.delFavoritesList = idMovie => {
    dispatch({ type: 'DELETE_FAVORITES_LIST', payload: idMovie });
  };

  value.changeOpenAuth = () => {
    dispatch({ type: 'CHANGE_OPEN_AUTH' });
  };

  value.defaultSearchQuery = () => {
    dispatch({ type: 'DEFAULT_SEARCH_QUERY' });
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
