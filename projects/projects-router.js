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
        return res.status(400).json({ message: 'Resource name is required to add' })
    }
    

})

router.get('/', (req, res) => {
    Projects.findProjects()
        .then(proj => {
            const tf = proj.map(proj => {
                Object.defineProperty(proj, "completed", {value:(proj.completed === 1) ? true:false})
                return proj })
            res.status(200).json(tf)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load projects'})
        })
})

router.post('/', (req, res) => {
    const pBody = req.body

    if(pBody.project_name && pBody.completed){
        Projects.addProject(pBody)
            .then(proj => {
                res.status(201).json(proj)
            })
            .catch(error => {
                res.status(500).json({ error: 'Could not add project'})
            })
    } else {
        return res.status(400).json({ message: 'Project name and completed are required to add a project' })
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Projects.findTask(id)
        .then(task => {
            const tf = task.map(task => {
                Object.defineProperty(task, "task_completed", {value:(task.task_completed === 1) ? true:false})
                return task })
            res.status(200).json(tf)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load tasks'})
        })
})

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params
    const tBody = req.body

    Projects.addTask(id, tBody)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could no add task'})
        })

        
})

module.exports = router

