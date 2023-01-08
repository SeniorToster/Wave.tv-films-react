export function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_LIST_COUNTRIES_GENDERS': {
      const genresList = payload.genres.map(genre => ({
        label: genre.genre,
        id: genre.id,
      }));

      const countriesList = payload.countries.map(country => ({
        label: country.country,
        id: country.id,
      }));

      return { ...state, genres: genresList, countries: countriesList };
    }
    case 'SET_GENRE': {
      if (payload) {
        const newIdGenre = state.genres.filter(
          genre => genre.label === payload
        )[0]?.id;

        return {
          ...state,
          inputValueGenre: payload,
          searchQuery: {
            ...state.searchQuery,
            genres: newIdGenre,
          },
        };
      }
      return {
        ...state,
        inputValueGenre: payload,
        searchQuery: {
          ...state.searchQuery,
          genres: '',
        },
      };
    }
    case 'SET_COUNTRY': {
      if (payload) {
        const newIdCountry = state.countries.filter(
          country => country.label === payload
        )[0]?.id;
        return {
          ...state,
          inputValueCountry: payload,
          searchQuery: {
            ...state.searchQuery,
            countries: newIdCountry,
          },
        };
      }

      return {
        ...state,
        inputValueCountry: payload,
        searchQuery: {
          ...state.searchQuery,
          countries: '',
        },
      };
    }
    case 'SET_AGE':
      return {
        ...state,
        inputValueAge: payload,
        searchQuery: {
          ...state.searchQuery,
          yearFrom: payload,
          yearTo: payload,
        },
      };
    case 'SET_RATING': {
      if (payload) {
        const arrRating = payload.split('-');
        return {
          ...state,
          inputValueRating: payload,
          searchQuery: {
            ...state.searchQuery,
            ratingTo: arrRating[0],
            ratingFrom: arrRating[1],
          },
        };
      }
      return {
        ...state,
        inputValueRating: payload,
        searchQuery: {
          ...state.searchQuery,
          ratingTo: '',
          ratingFrom: '',
        },
      };
    }
    case 'SET_SEARCH':
      return {
        ...state,
        inputValueSearch: payload,
        searchQuery: { ...state.searchQuery, keyword: payload.trim() },
      };
    case 'SET_MOVIES':
      return {
        ...state,
        moviesList: payload,
      };
    case 'SET_SERIES':
      return {
        ...state,
        seriesList: payload,
      };
    case 'CHANGE_LOADING':
      return {
        ...state,
        loading: payload,
      };

    case 'ADD_FAVORITES_LIST': {
      const newFavoriteList = [...state.favoritesList, payload];

      localStorage.favorites = JSON.stringify(newFavoriteList);
      return {
        ...state,
        favoritesList: newFavoriteList,
      };
    }
    case 'DELETE_FAVORITES_LIST': {
      const newFavoriteList = state.favoritesList.filter(
        movie => movie.kinopoiskId !== payload
      );

      localStorage.favorites = JSON.stringify(newFavoriteList);
      return {
        ...state,
        favoritesList: newFavoriteList,
      };
    }
    default:
      return state;
  }
}
