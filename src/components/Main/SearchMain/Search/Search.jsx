import { BsSearch } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import styles from './Search.module.scss';

function Search({ setText, text }) {
  return (
    <label className={styles.wrapperInput}>
      <input
        placeholder='Введите запрос'
        type='search'
        className={styles.input}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {text && <CgClose onClick={() => setText('')} />}
      <button className={styles.button}>
        <BsSearch />
      </button>
    </label>
  );
}

export default Search;
