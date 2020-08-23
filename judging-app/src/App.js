import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ScheduleTable from "./ScheduleTable";
import ProjectsList from "./python_code/mock_projects.json"
import { Dropdown } from "semantic-ui-react";

function GetOptions() {
  const options = [];

  ProjectsList.projects.forEach((project) => {
    let obj = {
      key: project.name,
      text: project.name,
      value: project.name,
    }
    options.push(obj)
  })

  return options;
}

function App() {
  return (
    <div className="App">
      <h1>
        Judging Scheduler
      </h1>
      <div className='Selector'>
        <h3 className='SelectorTitle'>
          Choose a Project
        </h3>
        <Dropdown clearable options={GetOptions()} selection/>
      </div>
      <div className="Schedule">
        <ScheduleTable className='Schedule__Table'/>
      </div>
    </div>
  );
}

export default App;
