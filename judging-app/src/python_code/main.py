import json
import random

# Judges list and number of judges
JUDGES = ["Bob", "Joe", "Moe", "Toe"]
NUM_JUDGES = len(JUDGES)

# Number of projects each judge can view
TIME_FOR_ONE_PROJECT = 15
TOTAL_TIME = 90
NUM_PROJECTS_PER_JUDGE = int(TOTAL_TIME/TIME_FOR_ONE_PROJECT)


# Load projects from json
def parse_project():
    with open('mock_projects.json') as f:
        return json.load(f)


def set_list():
    num_projects = len(projectObj["projects"])
    projects_needed = NUM_JUDGES * NUM_PROJECTS_PER_JUDGE
    num_reps = projects_needed/num_projects if projects_needed % num_projects == 0 else int(projects_needed/num_projects) + 1

    project_list = []
    for i in range(num_reps):
        project_list += projectObj["projects"]

    if projects_needed % NUM_PROJECTS_PER_JUDGE == 0:
        random.shuffle(project_list)

    return project_list


def set_assignments(project_list):


# Send assignments_dict to json file for front-end
def dump_json(assignments_dict):
    with open('results.json', 'w') as fp:
        json.dump(assignments_dict, fp)


projectObj = parse_project()
project_list = set_list()
judge_assignments = set_assignments(project_list)
dump_json(judge_assignments)
