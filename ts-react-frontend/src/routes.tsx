import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import DroneJacket from './components/pages/DroneJacket';
import PickitScore from './components/pages/Pickit/scoreboard';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/drone-jacket" component={DroneJacket} />
      <Route path="/pickit-score" component={PickitScore} />
    </BrowserRouter>
  );
}

export default Router;