import { useContext } from 'react';
import { CgClose } from 'react-icons/cg';
import { MoviesContext } from '../../Context/Context';
import TextField from '@mui/material/TextField';
import styles from './Authorization.module.scss';

function Authorization() {
  const { isOpenAuth, changeOpenAuth } = useContext(MoviesContext);

  return (
    isOpenAuth && (
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <CgClose
            className={styles.wrapper__close}
            onClick={() => changeOpenAuth()}
          />
          <h2 className={styles.wrapper__title}>Вход</h2>
          <div className={styles.wrapper__field}>
            <TextField id='outlined-basic' label='Логин' variant='outlined' />
          </div>
          <div className={styles.wrapper__field}>
            {' '}
            <TextField
              className={styles.wrapper__field}
              id='outlined-password-input'
              label='Пароль'
              type='password'
              autoComplete='current-password'
            />
          </div>
          <button
            className={styles.wrapper__button}
            size='large'
            variant='contained'
          >
            Войти
          </button>
        </div>
      </div>
    )
  );
}

export default Authorization;
