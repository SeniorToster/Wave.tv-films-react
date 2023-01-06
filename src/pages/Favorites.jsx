import { useContext } from 'react';
import Back from '../components/Back/Back';
import Movies from '../components/MoviesList/MoviesList';
import { MoviesContext } from '../Context';

function FavoritesPage() {
  const { favoritesList } = useContext(MoviesContext);

  return (
    <>
      <Back />
      <Movies movies={favoritesList} title={'Избранное'} />
    </>
  );
}

export default FavoritesPage;
