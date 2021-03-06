import React, { useState } from "react";
import ProjectsList from "../json/mock_projects.json";
import Dropdown from "react-dropdown";
import ScheduleTable from "./ScheduleTable";

function AdminView() {
  const [selectedProject, setSelectedProject] = useState('')

  const getOptions = () => {
    let projects = ProjectsList.projects.map((project) => {
      return project.name
    })
    projects.push("None")
    return projects
  }

  const onProjectSelect = (event, data) => {
    setSelectedProject(event.value)
  }

  return (
    <div className="AdminView">
      <h1>
        Judging Scheduler
      </h1>
      <div className='Selector'>
        <h3 className='SelectorTitle'>
          Choose a Project
        </h3>
        <Dropdown className='dropdown' options={getOptions()} onChange={onProjectSelect}/>
      </div>
      <div className="Schedule">
        <ScheduleTable className='Schedule__Table' selectedProject={selectedProject}/>
      </div>
    </div>
  );
}

export default AdminView;
