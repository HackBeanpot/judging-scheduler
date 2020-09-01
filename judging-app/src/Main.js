import AdminView from "./AdminView";
import JudgeView from "./JudgeView";
import React from "react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/admin' component={ AdminView } />
      <Route path='/judge' component={ JudgeView } />
    </Switch>
  );
}

export default Main
