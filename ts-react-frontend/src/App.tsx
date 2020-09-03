import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components_m/Page/Home';
import SiteMenu from './components_m/SiteMenu/SiteMenu';
import CompanyInfo from './components_m/CompanyInfo';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="page">
        <Route path="/" exact component={Home} />
        <CompanyInfo />
      </div>
      <SiteMenu />
    </BrowserRouter>
  );
}

export default App;