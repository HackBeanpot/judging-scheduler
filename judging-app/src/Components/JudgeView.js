import React, { useState } from "react";
import ResultList from "../json/results.json"
import Dropdown from "react-dropdown";
import JudgeTable from "./JudgeTable";

function JudgeView() {
  const [selectedJudge, setSelectedJudge] = useState(Object.keys(ResultList)[0])

  const getOptions = () => {
    return Object.keys(ResultList)
  }

  const onProjectSelect = (event, data) => {
    console.log(event.value)
    setSelectedJudge(event.value)
  }

  return (
    <div className="JudgeView">
      <h1>
        Judging Scheduler
      </h1>
      <div className='Selector'>
        <h3 className='SelectorTitle'>
          Choose a Judge
        </h3>
        <Dropdown className='dropdown' options={getOptions()} onChange={onProjectSelect}/>
      </div>
      <div className="Schedule">
        <JudgeTable className='Judge__Table' selectedJudge={ selectedJudge }/>
      </div>
    </div>
  );
}

export default JudgeView
