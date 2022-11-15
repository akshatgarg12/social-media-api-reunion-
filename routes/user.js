const express = require('express')
const user = require('../models/user')
const router = express.Router()

router.get('/user', (req, res) => {
    try{
        // get user
    }catch(e){
        console.log(e)
    }
    res.send(`get user data from auth Middleware and return it here`)
})

module.exports = router