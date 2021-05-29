import React from 'react';
import './CardRoom.scss';
import { RoomContext } from '../../RoomContext';

const Card = (roomInfo) => {
  const place = roomInfo.info;
  return (
    <RoomContext.Consumer>
      {({ room, setRoom }) => (
        <>
          <div
            className='card card-home'
            onClick={() => setRoom(roomInfo.info.devices)}
          >
            <div className='card-home-body'>
              <div className='card-home-body-description'>
                <h5 className='card-home-title'>{place.name}</h5>
              </div>
            </div>

            {place.name === 'Kitchen' ? (
              <img
                src='/kitchen.png'
                className='card-home-img'
                alt='Icon Kitchen'
              />
            ) : (
              <img
                src='/living-room.png'
                className='card-home-img'
                alt='Icon Living Room'
              />
            )}
          </div>
        </>
      )}
    </RoomContext.Consumer>
  );
};

export default Card;
