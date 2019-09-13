const db = require('./dbConfig');

module.exports = {
    addResource,
    addProject,
    addTask,
    getResources,
    getProjects,
    getTasks
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
        return ids
    });
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return ids
    });
}

function addTask(task) {
    return db('tasks')
    .insert(task)
    .then(ids => {
        return ids
    });
}

function getResources() {
    return db('resources')
}

function getProjects() {
    return db('projects')
}

function getTasks() {
    return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
    't.task_id', 
    't.description', 
    't.notes', 
    't.completed',
    'p.name',
    'p.description')
    .then(data => {
        console.log(data);
    })
}