const db = require('../data/db-config')

module.exports = {
    add,
    find,
    addTask,
    findTask
}

function add(proj) {
    return db('projects as p')
        .insert(proj)
        .then(([proj]) => {
            return proj
        })
}

function find() {
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
    return db('tasks as t')
    .join('projects as p', 't.project_id', '=', 'p.id')
    .select('project_name', 'task_number', 't.description', 'notes', 'task_completed')
    .where({ project_id: id})
}