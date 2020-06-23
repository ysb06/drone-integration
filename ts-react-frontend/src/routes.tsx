import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import DroneJacket from './components/pages/DroneJacket';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/drone-jacket" component={DroneJacket} />
    </BrowserRouter>
  );
}

export default Router;