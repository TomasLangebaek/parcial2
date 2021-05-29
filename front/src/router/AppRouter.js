import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomesList } from '../pages/homes-list/HomesList';
import { HomeDetail } from '../pages/home-detail/Home-detail';
import { Navbar } from '../components/nav/Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar setLanguage={'en'}></Navbar>
      <Switch>
        <Route exact path='/'>
          <HomesList />
        </Route>
        <Route exact path='/homes'>
          <HomesList />
        </Route>
        <Route exact path='/homes/:id'>
          <HomeDetail />
        </Route>
      </Switch>
    </Router>
  );
};
