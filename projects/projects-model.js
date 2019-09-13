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

}

function addResource() {

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