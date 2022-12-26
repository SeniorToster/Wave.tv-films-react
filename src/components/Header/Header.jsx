import { BsFilm, BsBookmark, BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.bar}>
      <Link className={styles.bar__logo} to='/'>
        <BsFilm />
        <p>
          wave.
          <span>
            tv
            <sup>beta 0.2</sup>
          </span>
        </p>
      </Link>
      <div className={styles.bar__wrapperIcons}>
        <Link to='/search'>
          <BsSearch />
        </Link>
        <Link to='/favorites'>
          <BsBookmark />
        </Link>
        <Link className={styles.bar__profile} to='/'>
          <CgProfile />
        </Link>
      </div>
    </header>
  );
}

export default Header;
