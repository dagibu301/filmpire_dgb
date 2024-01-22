// Libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
// Components
import { Actors, MovieInformation, Movies, Profile, NavBar } from './components';

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/movie/:id">
          <MovieInformation />
        </Route>
        <Route exact path="/actors/:id">
          <Actors />
        </Route>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
