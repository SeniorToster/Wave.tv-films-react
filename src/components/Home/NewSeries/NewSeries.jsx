import MoviesList from '../../MoviesList/MoviesList';
import Title from '../../Title/Title';
import styles from './NewSeries.module.scss';

function NewSeries({ series }) {
  return (
    <>
      <Title text={'Новые сериалы'} />
      <MoviesList movies={series} />
    </>
  );
}

export default NewSeries;
