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

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      <Back />
      <div className={styles.wrapper} data-kinopoisk={idMovieParams} id='kinobd'></div>
    </div>
  );
}

export default Watch;
