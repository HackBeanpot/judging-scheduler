import React, { Component } from 'react';
import results from '../json/results.json';

const TIME_SLOTS = ['11:00', '11:15', '11:30', '11:45', '12:00', '12:15']

export default class JudgeTable extends Component {
  render() {
    const selectedJudge = this.props.selectedJudge
    const rows = []

    const header = []
    header.push(<th id='time-header'>Time</th>)
    const judgeId = `judge-${selectedJudge}`
    header.push(<th id={ judgeId }> { selectedJudge } </th>);
    const headRow = <tr className='header-row'> {header} </tr>

    for (let row = 0; row < results[selectedJudge].length; row++) {
      let rowId = `row-${row}`
      const cells = []
      cells.push(<td className='time-col'> { TIME_SLOTS[row] } </td> )

      let cellId = `cell${row}`
      let projectName = results[selectedJudge][row].name
      cells.push(<td key={cellId} className={cellId}> { projectName } </td> )

      rows.push(<tr key={row} className={rowId}>{ cells }</tr> )
    }

    return (
      <div className='schedule-container'>
        <table className='schedule-table'>
          <thead>
            { headRow }
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
    );
  }
}
