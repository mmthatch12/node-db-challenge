const express = require('express')

const Resources = require('./resources-model')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load resources' })
        })
})

router.post('/', (req, res) => {
    const rBody = req.body

    if(rBody.resource_name){
        Resources.add(rBody)
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

module.exports = router