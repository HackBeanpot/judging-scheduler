import React from 'react';
import './App.css';
import results from './python_code/results.json';

function App() {
  return (
    <div className="App">
      <h1>
        Judging Scheduler
      </h1>
      <div className="ProjectAssignments_All">
        {Object.entries(results).map((key, value) => (
          <div className="ProjectAssignments_Individual">
            <h2 className="ProjectAssignments_JudgeName">
              { value }
            </h2>
            <ol className="ProjectAssignments_ProjectList">
              {results[key[0]].map((result) => (
                  <li className="ProjectAssignments_IndividualProject">
                    { result.name }
                  </li>
              )) }
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
