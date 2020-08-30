import Projects from './json/mock_projects.json'

const TIME_PER_PROJECT = 15
const TOTAL_TIME = 90
const NUM_PROJECTS_PER_JUDGE = (TOTAL_TIME / TIME_PER_PROJECT)
const NUM_JUDGES = 4

exports.setList = () => {
  let numProjects = Projects["projects"].length()
  console.log(numProjects)
}
