import React, { Component } from 'react';
import results from '../json/results.json';
import '../CSS/JudgeTable.css'

const TIME_SLOTS = ['11:00', '11:15', '11:30', '11:45', '12:00', '12:15']

export default class JudgeTable extends Component {
  render() {
    const selectedJudge = this.props.selectedJudge
    const rows = []

    const header = []
    header.push(<div className='table-header-cell'>Time</div>)
    const judgeId = `judge-${selectedJudge}`
    header.push(<div className='table-header-cell' id={ judgeId }> { selectedJudge } </div>);
    // const headRow = <div className='header-row'> {header} </div>

    for (let row = 0; row < results[selectedJudge].length; row++) {
      let rowId = `row-${row}`
      const cells = []
      cells.push(<div className='table-cell'> { TIME_SLOTS[row] } </div> )

      let cellId = `cell${row}`
      let projectName = results[selectedJudge][row].name
      cells.push(<div key={cellId} className='table-cell'> { projectName } </div> )

      rows.push(<div key={row} className='table-row'>{ cells }</div> )
    }

    return (
      <div className='schedule-container'>
        <div className='schedule-table'>
          <div className='schedule-header'>
            { header }
          </div>
          <div className='schedule-body'>
            { rows }
          </div>
        </div>
      </div>
    );
  }
}
