const express = require('express')
const router = express.Router()

router.post('/comment/:id', (req, res) => {
    const {id} = req.params
    const {comment} = req.body
    res.send(`add comment for post with ${id} by the authenticated user.`)
})

module.exports = router