const db = require('../data/db-config')

module.exports = {
    findResources,
    addResource,
    addProject,
    findProjects,
    addTask,
    findTask
}

function findResources() {
    return db('resources')
}

function addResource(reso) {
    return db('resources')
        .insert(reso)
        .then(([resc]) => {
            return resc
        })
}

function addProject(proj) {
    return db('projects as p')
        .insert(proj)
        .then(([proj]) => {
            return proj
        })
}

function findProjects() {
    return db('projects')
}

function addTask(id, task) {
    return db('projects as p')
        .join('tasks as t', 'p.id', '=', 't.project_id')
        .where({ project_id: id})
        .insert(task)
        .then(([task]) => {
            return task
        })
        
}

function findTask(id) {
    return db('projects as p')
    .join('tasks as t', 'p.id', '=', 't.project_id')
    .where({ project_id: id})
}