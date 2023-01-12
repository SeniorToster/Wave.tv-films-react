import { Link } from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';
import FavoriteIcon from '../../Ui/FavoriteIcon/FavoriteIcon';
import styles from './Button.module.scss';

function Button({ type, filmId, movie }) {
  return (
    <>
      {type === 'WATCH' ? (
        <Link to={`/watch/${filmId}`} className={styles.button}>
          <BsFillCaretRightFill />
          Смотреть
        </Link>
      ) : (
        <div title='Буду смотреть' className={styles.buttonTwo}>
          <FavoriteIcon movie={movie} />
        </div>
      )}
    </>
  );
}

export default Button;
