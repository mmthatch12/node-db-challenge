const db = require('../data/db-config')

module.exports = {
    addProject,
    findProjects,
    addTask,
    findTask
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
    return db('tasks as t')
        .join('projects as p', 't.project_id', '=', 'p.id')
        .where({ project_id: id })
        .insert(task)
        .then(([task]) => {
            return task
        })
        
}

function findTask(id) {
    return db('projects as p')
    .join('tasks as t', 'p.id', '=', 't.project_id')
    .select('project_name', 'task_number', 'notes', 'task_completed')
    .where({ project_id: id})
}