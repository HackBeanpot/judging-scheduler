import React from 'react';
import './App.css';
import ScheduleTable from "./ScheduleTable";

function App() {
  return (
    <div className="App">
      <h1>
        Judging Scheduler
      </h1>
      <div className="Schedule">
        <ScheduleTable className='Schedule__Table'/>
      </div>
    </div>
  );
}

export default App;
