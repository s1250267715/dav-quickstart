import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Provider } from 'mobx-react';
import stores from './store';
import IndexPage from './pages/IndexPage';
import Interview from './pages/interview';
import LearnAnt from './pages/learn-ant';
import Handling from './pages/handling';
import TodoList from './pages/todoList';

function RouterConfig({ history }) {
  const route = [
    { path: '', component: IndexPage },
    { path: 'interview/:age', component: Interview },
    { path: 'Learn-ant/:id?', component: LearnAnt },
    { path: 'handling/:id?', component: Handling },
    { path: 'todoList/:id?', component: TodoList },
  ]
  console.log('route :', route);
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
