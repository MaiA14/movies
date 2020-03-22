import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history.js';

import MoviesApp from '../src/pages/MoviesApp';
import Movie from '../src/pages/Movie'

function App() {
  return (
    <div className="App"> 
      <Router history={history}>
        <Switch>
        <Route component={MoviesApp} path="/" exact></Route>
        <Route component={MoviesApp} path="/movies" exact></Route>
        <Route component={Movie} path="/movies/:id" exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;