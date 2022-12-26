import { useContext } from 'react';
import Movies from '../components/MoviesList/MoviesList';
import { MoviesContext } from '../Context';

function Favorites() {
  const { favoritesList } = useContext(MoviesContext);

  return <Movies movies={favoritesList} title={'Избранное'} />;
}

export default Favorites;
