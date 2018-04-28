import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Provider } from 'mobx-react';
import stores from './store';
import IndexPage from './pages/IndexPage';
import Interview from './pages/interview';
import LearnAnt from './pages/learn-ant';

function RouterConfig({ history }) {
  const route = [
    { path: '', component: IndexPage },
    { path: 'interview/:age', component: Interview },
    { path: 'Learn-ant', component: LearnAnt },
  ]
  return (
    <Provider {...stores}>
      <Router history={history}>
        <Switch>
          {!!route.length && route.map(item => <Route key={item} path={`/${item.path}`} exact component={item.component} />)}
        </Switch>
      </Router>
    </Provider>
  );
}

export default RouterConfig;
