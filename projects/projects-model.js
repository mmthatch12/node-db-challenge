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

function addProject() {
    return db('projects')
}

function findProjects() {
    return db('projects')
}

function addTask() {

}

function findTask() {

}