import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Back from '../components/Back/Back';

function WatchPage() {
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
      <div data-kinopoisk={idMovieParams} id='kinobd'></div>
    </div>
  );
}

export default WatchPage;
