const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => {
    res.send(`get user data from auth Middleware and return it here`)
})

module.exports = router