import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import EmployeesList from './containers/EmployeesList';
import NewEmployee from './containers/NewEmployee';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={EmployeesList} />
          <Route exact path="/create" component={NewEmployee} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
