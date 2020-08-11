import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import DroneJacket from './components/pages/DroneJacket';
import PickitScore from './components/pages/Pickit/scoreboard';
import PickIt from './components/pages/Pickit';
import DroniaEdu from './components/pages/DroniaEdu';
import ContactUs from './components/pages/ContactUs';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/drone-jacket" component={DroneJacket} />
      <Route path="/pick-it" component={PickIt} />
      <Route path="/dronia-edu" component={DroniaEdu} />
      <Route path="/contact" component={ContactUs} />

      <Route path="/pickit-score" component={PickitScore} />
    </BrowserRouter>
  );
}

export default Router;