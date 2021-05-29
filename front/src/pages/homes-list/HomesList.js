import React, { useEffect, useState } from 'react';
import './HomesList.scss';
import { getHomes } from '../../services/utils';
import Card from '../../components/card/Card';
import { FormattedMessage } from 'react-intl';

export const HomesList = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem('homes') === null) setHomes('Cargando..');
      else setHomes(JSON.parse(localStorage.getItem('homes')));
    } else {
      getHomes().then((data) => {
        setHomes(data);
        localStorage.setItem('homes', JSON.stringify(data));
      });
    }
  }, []);

  return (
    <>
      <h1>
        <FormattedMessage id='spaces' />
      </h1>
      <div className='container home'>
        {homes && homes.map((home, i) => <Card info={home} key={i}></Card>)}
      </div>
    </>
  );
};
