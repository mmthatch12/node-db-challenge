const express = require('express')

const ProjectRouter = require('../recipes/project-router')

const server = express()

server.use(express.json())
server.use('/recipes', ProjectRouter)


server.get('/', (req, res) => {
    res.send('Sanity Check')
})


module.exports= server