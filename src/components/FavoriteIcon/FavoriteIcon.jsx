import { useContext } from 'react';
import { BsBookmark, BsBookmarkX } from 'react-icons/bs';
import { MoviesContext } from '../../Context';

function FavoriteIcon({ movie }) {
  const { kinopoiskId } = movie;
  const { favoritesList, addFavoritesList, delFavoritesList } =
    useContext(MoviesContext);
  const isFavorite = favoritesList.filter(
    movie => movie.kinopoiskId === kinopoiskId
  );
  return (
    <>
      {isFavorite.length ? (
        <BsBookmarkX
          onClick={e => {
            e.preventDefault();
            delFavoritesList(kinopoiskId);
          }}
        />
      ) : (
        <BsBookmark
          onClick={e => {
            e.preventDefault();
            addFavoritesList(movie);
          }}
        />
      )}
    </>
  );
}

export default FavoriteIcon;
