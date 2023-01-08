import { useContext } from 'react';
import { MoviesContext } from '../../Context/Context';
import Back from '../Ui/Back/Back';
import Movies from '../MoviesList/MoviesList';

function Favorite() {
  const { favoritesList } = useContext(MoviesContext);

  return (
    <>
      <Back />
      <Movies movies={favoritesList} title={'Избранное'} />
    </>
  );
}

export default Favorite;
