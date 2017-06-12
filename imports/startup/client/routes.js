// TOP-LEVEL IMPORTS
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// LAYOUTS
import PublicLayout from '../../ui/layouts';
// PUBLIC
import LoginPage from '/imports/ui/pages';

// Hook where will be fetched the data before displaying the component
// Will redirect user if not logged


const AppRoutes = () => {
  return (
    <Router history={browserHistory}>

      {/*PUBLIC AREA*/}
      <Route path="/" component={ PublicLayout }>
        <IndexRoute name='index' component={ LoginPage } />
      </Route>
    
    </Router>
  );
}

export default AppRoutes;