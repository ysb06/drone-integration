import React, { createContext } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './components_m/Page/Home';
import SiteMenu from './components_m/SiteMenu/SiteMenu';
import CompanyInfo from './components_m/CompanyInfo';
import DroneJacket from './components_m/Page/DroneJacket';
import PickIt from './components_m/Page/PickIt';
import DroniaEdu from './components_m/Page/DroniaEdu';
import Contact from './components_m/Page/Contact';
import FallBack from './components_m/Page/FallBack';
import LectureMovie from './components_m/LectureMovie';

interface IGeneralContext {
  language: String
}

export const GeneralContext: React.Context<IGeneralContext> = createContext<IGeneralContext>({ language: "ko" })

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="page">
        <GeneralContext.Provider value={{ language: "ko" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/drone-jacket" component={DroneJacket} />
            <Route path="/pick-it" component={PickIt} />
            <Route path="/dronia-edu" component={DroniaEdu} />
            <Route path="/contact" component={Contact} />
            <Route path="/dronia-edu-lecture" component={LectureMovie} />
            <Route path="/not-found" component={FallBack} />
            <Redirect to="/not-found" />
          </Switch>
          <CompanyInfo />
        </GeneralContext.Provider>
      </div>
      <SiteMenu />
    </BrowserRouter>
  );
}

export default App;