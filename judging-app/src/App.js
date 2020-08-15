import React from 'react';
import logo from './logo.svg';
import './App.css';
import results from './python_code/results.json';

function App() {
  return (
    <div className="App">
      <h1>
        Judging Scheduler
      </h1>
      <div className='JudgingAssignments'>
        {Object.entries(results).forEach((key, value) => (
            <div className='ProjectAssignment'>
              <h2>
                { value }
              </h2>
              <ol>
                { results[value].forEach((result) => (
                  <li>
                    { result["name"] }
                  </li>
                )) }
              </ol>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
