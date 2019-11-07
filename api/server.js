const express = require('express')

const ProjectRouter = require('../projects/projects-router')
const ResourcesRouter = require('../resources/resources-router')

const server = express()

server.use(express.json())
server.use('/projects', ProjectRouter)
server.use('/resources', ResourcesRouter)


server.get('/', (req, res) => {
    res.send('Sanity Check')
})


module.exports= server