import React, { Component } from 'react';
import results from './results.json';
import "./ScheduleTable.css";

const TIME_SLOTS = ['11:00', '11:15', '11:30', '11:45', '12:00', '12:15']
const JUDGES = Object.keys(results);

export default class ScheduleTable extends Component {
  render() {
    const rows = [];

    // Create header row
    const header = [];
    header.push(<th id='time-header'>Time</th>)
    Object.entries(results).forEach(([key, value]) => {
      let judgeId = `judge-${key}`
      header.push(<th id={judgeId}>{ key }</th>)
    })
    const headRow = <tr className='header-row'>{ header }</tr>

    // Create rows based on each schedules
    for (let row = 0; row < results[JUDGES[0]].length; row++) {
      let rowId = `row${row}`
      const cells = [];

      // Create column for time
      cells.push(<td className='time-col'>{ TIME_SLOTS[row] }</td> )


      for (let col = 0; col < JUDGES.length; col++) {
        let cellId = `cell${row}-${col}`;
        let projectName = results[JUDGES[col]][row].name

        if (projectName === this.props.selectedProject) {
          cells.push(<td key={cellId} className='selected-cell'>{ projectName }</td>)
        } else {
          cells.push(<td key={cellId} className={cellId}>{ projectName }</td>)
        }
      }
      rows.push(<tr key={row} className={rowId}>{cells}</tr>);
    }
    return (
      <div className='schedule_container'>
        <table className='schedule_table'>
          <thead>
            {headRow}
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
