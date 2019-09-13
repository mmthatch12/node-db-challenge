const express = require('express')

const ResourcesRouter = require('../recipes/resources-router')

const server = express()

server.use(express.json())
server.use('/recipes', ResourcesRouter)


server.get('/', (req, res) => {
    res.send('Sanity Check')
})


module.exports= server