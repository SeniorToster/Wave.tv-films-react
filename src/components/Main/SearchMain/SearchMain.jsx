import { useState } from 'react';
import Search from './Search/Search';
import Filters from './Filters/Filters';
import styles from './SearchMain.module.scss';

function SearchMain({ handleSearchData }) {
  const [text, setText] = useState('');
  const [filters, setFilters] = useState({});

  const submitHandle = e => {
    e.preventDefault();
    handleSearchData({ ...filters, keyword: text.trim() });
  };

  return (
    <form onSubmit={submitHandle} className={styles.form}>
      <Search setText={setText} text={text} />
      <Filters filters={filters} setFilters={setFilters} />
    </form>
  );
}

export default SearchMain;
