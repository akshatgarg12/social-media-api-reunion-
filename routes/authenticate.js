const express = require('express')
const router = express.Router()

router.post('/authenticate' , (req, res) => {
    const {email, password} = req.body
    // if user is found in database , set a JWT
    res.send('Logged In')
})


module.exports = router