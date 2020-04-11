import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'; // Installed as a dependency for react-router-dom
import Page from '../../containers/Page';
import Home from '../../containers/Home';
import {ROUTES, ROUTES_NAMES} from './constants';
import './style.less';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path={ROUTES_NAMES.DEFAULT} 
          render={({ location }) => {
            const {title, key} = ROUTES[location.pathname] || ROUTES['default'];
            return (
              <Page
                title={title}
                selectedKey={key}
                location={location}
                className={"page-loayout"}
              >
                <Home location={location} />
              </Page>
            );
          }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
