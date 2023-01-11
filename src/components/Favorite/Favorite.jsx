import { useContext } from 'react';
import { MoviesContext } from '../../Context/Context';
import Back from '../Ui/Back/Back';
import Movies from '../MoviesList/MoviesList';
import Title from '../Ui/Title/Title';

function Favorite() {
  const { favoritesList } = useContext(MoviesContext);

  return (
    <>
      <Back />
      <Title text={'Избранное'} />
      <Movies movies={favoritesList} title={'Избранное'} />
    </>
  );
}

export default Favorite;
