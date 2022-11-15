const express = require('express')
const router = express.Router()

router.post('/follow/:id', (req, res) => {
    const {id} = req.params
    res.send(`user x now will follow user ${id}`)
})

router.post('/unfollow/:id', (req, res) => {
    const {id} = req.params
    res.send(`user x now will unfollow user ${id}`)
})

module.exports = router