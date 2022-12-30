import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './Back.module.scss';

function Back() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className={styles.wrapper}>
      <FaChevronLeft />
      <p>Назад</p>
    </div>
  );
}

export default Back;
