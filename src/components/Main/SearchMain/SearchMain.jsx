import Search from './Search/Search';
import Filters from './Filters/Filters';
import styles from './SearchMain.module.scss';

function SearchMain({ handleSearch }) {
  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <Search />
      <Filters />
    </form>
  );
}

export default SearchMain;
