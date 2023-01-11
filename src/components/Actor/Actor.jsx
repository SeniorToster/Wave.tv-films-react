import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { getActor } from '../../api';
import Back from '../Ui/Back/Back';
import NoContent from '../Ui/NoContent/NoContent';
import ActorInfo from './ActorInfo/ActorInfo';

function Actor() {
  const [loading, setLoading] = useState(true);
  const [actor, setActor] = useState([]);
  const { idActorParams } = useParams();

  useEffect(() => {
    getActor(idActorParams)
      .then(json => {
        if (json.personId) setActor({ ...json });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
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
        </>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default Actor;
