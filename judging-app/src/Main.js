import AdminView from "./Components/AdminView";
import JudgeView from "./Components/JudgeView";
import Home from "./Components/Home";
import React from "react";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/home' component={ Home } />
      <Route path='/admin' component={ AdminView } />
      <Route path='/judge' component={ JudgeView } />
    </Switch>
  );
}

export default Main
