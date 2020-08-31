import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components_m/Page/Home';
import SiteMenu from './components_m/SiteMenu/SiteMenu';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SiteMenu />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;