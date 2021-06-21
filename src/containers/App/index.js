import React from 'react';
import { Router, Route } from 'react-router';
import Main from '../../components/common';
import Login from '../../components/common/login';
import RaiseDoubt from '../../components/students/raise_doubt';
import StudentHome from '../../components/students';
import TA from '../../components/ta';
import DoubtList from '../../components/ta/doubt_list';
import { createBrowserHistory } from "history";
import SolveDoubt from '../../components/ta/doubt_solve';

const customHistory = createBrowserHistory();

const App = (props) => {
  return (
    <Router history={customHistory}>
      <Route path="/" component={Main} />
      <Route path="/authenticate" component={Login} />
      <Route path="/student/home" component={StudentHome} />
      <Route path="/student/raise_doubt" component={RaiseDoubt} />
      <Route path="/ta/doubt/list" component={DoubtList} />
      <Route path="/ta/doubt/solve" component={SolveDoubt} />
      <Route path="/ta/home" component={TA} />
    </Router>
  );
}

export default App;
