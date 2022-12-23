import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { MoviesContext } from '../../../../Context';
import styles from './Search.module.scss';

function Search() {
  const { inputValueSearch, handleInputSearch } = useContext(MoviesContext);
  return (
    <label className={styles.wrapperInput}>
      <input
        placeholder='Введите запрос'
        type='search'
        className={styles.input}
        value={inputValueSearch}
        onChange={e => handleInputSearch(e.target.value)}
      />
      {inputValueSearch && <CgClose onClick={() => handleInputSearch('')} />}
      <button className={styles.button}>
        <BsSearch />
      </button>
    </label>
  );
}

export default Search;
