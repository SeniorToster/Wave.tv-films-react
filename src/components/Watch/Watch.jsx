import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Back from '../Ui/Back/Back';
import styles from './Watch.module.scss';

function Watch() {
  const { idMovieParams } = useParams();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/player_.js';
    document.body.appendChild(script);
    window.scrollTo(0, 0);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Back />
      <div
        className={styles.wrapper__video}
        data-kinopoisk={idMovieParams}
        id='kinobd'
      ></div>
    </div>
  );
}

export default Watch;
