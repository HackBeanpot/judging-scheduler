import json
import random

TIME_FOR_ONE_PROJECT = 5
TOTAL_TIME = 30
NUM_PROJECTS_PER_JUDGE = int(TOTAL_TIME/TIME_FOR_ONE_PROJECT)


def parse_project():
    with open('mock_projects.json') as f:
        return json.load(f)


def distribute_projects(projects, num_judges):
    assignments = {}

    # Assign projects for each judge
    for i in range(num_judges):
        for j in range(NUM_PROJECTS_PER_JUDGE):
            # Select project from list using random num
            proj = projects[random.randint(0, len(projects) - 1)]
            if i in assignments:
                # If project is already assigned to this judge, find another one
                while proj in assignments[i]:
                    proj = projects[random.randint(0, len(projects) - 1)]

                # Add to the list of judges for this project
                assignments[i].append(proj)
                assignments.update({i: assignments[i]})
            else:
                assignments[i] = [proj]

    return assignments


projectObj = parse_project()

judge_assignments = distribute_projects(projectObj["projects"], 4)

print(judge_assignments)
