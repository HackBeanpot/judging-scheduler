import React from "react";
import { Route } from 'react-router';

import App from './App.js';
import AdminView from "./AdminView";
import JudgeView from "./JudgeView";

export default (
  <Route path="/" component={ App }>
    <Route path='/admin' component={ AdminView } />
    <Route path='/judge' component={ JudgeView } />
  </Route>
);
