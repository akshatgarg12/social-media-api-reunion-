const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/user', async (req, res) => {
    try{
        const user = req.user
        const _id = user._id
        const userInfo = await User.findOne({_id}, {name : 1, followers : 1, following:1})
        userInfo.followers = userInfo.followers.length
        userInfo.following = userInfo.following.length
        res.send(userInfo);
    }catch(e){
        console.log(e.message)
        res.status(404).json({message : e.message})
    }
})

module.exports = router