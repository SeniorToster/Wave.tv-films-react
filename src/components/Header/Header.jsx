import { BsFilm } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.bar}>
      <a className={styles.bar__logo} href='./'>
        <BsFilm />
        <p>
          wave.
          <span>
            tv
            <sup>beta 0.2</sup>
          </span>
        </p>
      </a>
      <CgProfile className={styles.bar__profile} />
    </header>
  );
}

export default Header;
