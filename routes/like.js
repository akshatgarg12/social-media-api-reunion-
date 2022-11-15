const express = require('express')
const router = express.Router()

router.post('/like/:id', (req, res) => {
    const {id} = req.params
    res.send(`would like the post with ${id} by the authenticated user.`)
})

router.post('/unlike/:id', (req, res) => {
    const {id} = req.params
    res.send(`would unlike the post with ${id} by the authenticated user.`)
})

module.exports = router