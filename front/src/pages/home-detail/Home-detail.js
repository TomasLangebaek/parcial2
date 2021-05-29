import React, { useEffect, useState } from 'react';
import './HomesList.scss';
import { getHomeById } from '../../services/utils';
import CardRoom from '../../components/cardRoom/CardRoom';
import { useParams } from 'react-router-dom';
import DeviceList from '../../components/device-list/DeviceList';
import { RoomContext } from '../../RoomContext';
import Pie from '../../components/d3/piechart';
import { FormattedMessage } from 'react-intl';
export const HomeDetail = () => {
  const [home, setHome] = useState([]);
  const home_id = ID();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem(home_id) === null) setHome(['Cargando...']);
      else setHome(JSON.parse(localStorage.getItem(home_id)));
    } else {
      getHomeById(home_id).then((place) => {
        setHome(place.rooms);
        localStorage.setItem(home_id, JSON.stringify(place.rooms));
        place.rooms.forEach(({ name, powerUsage }) => {
          setData((data) => [...data, { name, value: powerUsage.value }]);
        });
      });
    }
  }, []);

  return (
    <RoomContext.Consumer>
      {({ room, setRoom }) => (
        <>
          <h1>
            <FormattedMessage id='myRooms' />
          </h1>
          <div className='container home'>
            {home &&
              home.map((rooom, i) => (
                <CardRoom info={rooom} key={i}></CardRoom>
              ))}
            <div className='list'>
              <DeviceList roomInfo={room}></DeviceList>
            </div>
          </div>
          <h1>
            <FormattedMessage id='stats' />
          </h1>
          <div className='container pie'>
            <Pie data={data} />
            <h3>
              <FormattedMessage id='figure' />
            </h3>
          </div>
        </>
      )}
    </RoomContext.Consumer>
  );
};

function ID() {
  let { id } = useParams();
  return id;
}
