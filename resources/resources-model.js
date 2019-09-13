const db = require('../data/db-config')

module.exports = {
    find,
    add,

}

function find() {
    return db('resources')
}

function add(reso) {
    return db('resources')
        .insert(reso)
        .then(([resc]) => {
            return resc
        })
}