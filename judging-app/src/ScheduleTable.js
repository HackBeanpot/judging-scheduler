import React, { Component } from 'react';
import results from './python_code/results.json';
import "./ScheduleTable.css";

const BASE_TIME = 1100

export default class ScheduleTable extends Component {
  render() {
    const rows = [];

    // Create header row
    const header = [];
    header.push(<td id='time-header'>Time</td>)
    Object.entries(results).forEach(([key, value]) => {
      let judgeId = `judge-${key}`
      header.push(<td id={judgeId}>{ key }</td>)
    })
    rows.push(<tr id='header-row'>{ header }</tr>)

    // Create rows based on each schedules
    for (let row = 0; row < results["judge 1"].length; row++) {
      let rowId = `row${row}`
      const cells = [];

      // Create column for time
      let currTime = BASE_TIME + (row * 5)
      cells.push(<td id='time-col'>{ currTime }</td> )


      for (let col = 0; col < Object.keys(results).length; col++) {
        let cellId = `cell${row}-${col}`
        cells.push(<td key={cellId} id={cellId}>{ results[Object.keys(results)[col]][row].name }</td>)
      }
      rows.push(<tr key={row} id={rowId}>{cells}</tr>);
    }
    return (
      <div className='schedule_container'>
        <table className='schedule_table'>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
