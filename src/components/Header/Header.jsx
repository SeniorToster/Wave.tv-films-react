import { BsFilm } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.bar}>
      <BsFilm />
      <div>
        wave.
        <span>
          tv
          <sup>beta 0.1</sup>
        </span>
      </div>
      <CgProfile className={styles.bar__profile} />
    </header>
  );
}

export default Header;
