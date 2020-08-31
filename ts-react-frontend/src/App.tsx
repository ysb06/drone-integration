import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components_m/Page/Home';
import SiteMenu from './components_m/SiteMenu/SiteMenu';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="page">
        <Route path="/" exact component={Home} />
      </div>
      <SiteMenu />
    </BrowserRouter>
  );
}

export default App;