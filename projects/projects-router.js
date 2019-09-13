const express = require('express')

const Projects = require('./projects-model')

const router = express.Router()

router.get('/resources', (req, res) => {
    Projects.findResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load resources' })
        })
})

router.post('/resources', (req, res) => {
    const rBody = req.body

    if(rBody.resource_name){
        Projects.addResource(rBody)
            .then(reso => {
                res.status(201).json(reso)
            })
            .catch(error => {
                res.status(500).json({ error: 'Could not add resource'})
            })
    } else {
        res.status(400).json({ message: 'Resource name is required to add' })
    }
    

})

router.get('/', (req, res) => {
    Projects.findProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load projects'})
        })
})

router.post('/', (req, res) => {
    const pBody = req.body

    Projects.addProject()
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Projects.findTasks(id)
})

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params

    Projects.addTask(id)
})

module.exports = router

