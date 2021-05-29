import './App.scss';
import React, { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { RoomContext } from './RoomContext';

function App() {
  const [room, setRoom] = useState();
  const value = { room, setRoom };
  return (
    <>
      <main>
        <RoomContext.Provider value={value}>
          <AppRouter />
        </RoomContext.Provider>
      </main>
    </>
  );
}

export default App;
