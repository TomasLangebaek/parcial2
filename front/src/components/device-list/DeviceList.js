import React from 'react';
import { RoomContext } from '../../RoomContext';
import { FormattedMessage } from 'react-intl';
const DeviceList = (props) => {
  return (
    <RoomContext.Consumer>
      {({ room, setRoom }) => (
        <table class='table' style={{ width: '370px' }}>
          <thead>
            <tr>
              <th scope='col' style={{ width: '70px' }}>
                #
              </th>
              <th scope='col' style={{ width: '100px' }}>
                ID
              </th>
              <th scope='col' style={{ width: '100px' }}>
                <FormattedMessage id='device' />
              </th>
              <th scope='col' style={{ width: '100px' }}>
                <FormattedMessage id='value' />
              </th>
            </tr>
          </thead>
          <tbody>
            {room &&
              room.map((e, i) => (
                <tr key={i}>
                  <th scope='row'>{i + 1}</th>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.desired.value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </RoomContext.Consumer>
  );
};

export default DeviceList;
