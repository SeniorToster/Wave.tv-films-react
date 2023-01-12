import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { getActor } from '../../api';
import Back from '../Ui/Back/Back';
import NoContent from '../Ui/NoContent/NoContent';
import ActorInfo from './ActorInfo/ActorInfo';
import TabsContent from '../Ui/TabsContent/TabsContent';
import ActorFacts from './ActorFacts/ActorFacts';
import ActorMovies from './ActorMovies/ActorMovies';

function Actor() {
  const [loading, setLoading] = useState(true);
  const [actor, setActor] = useState([]);
  const { idActorParams } = useParams();
  const componentTabs = [
    { name: 'Факты', component: <ActorFacts factsList={actor.facts} /> },
    {
      name: 'Актёр фильмов',
      component: <ActorMovies moviesList={actor.films} />,
    },
  ];
  useEffect(() => {
    getActor(idActorParams)
      .then(json => {
        if (json.personId) setActor({ ...json });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : actor.personId ? (
        <>
          <Back />
          <ActorInfo actor={actor} />
          <TabsContent components={componentTabs} />
        </>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default Actor;
