const express = require('express')
const router = express.Router()
const Comment = require('comment')

router.post('/comment/:id', async (req, res) => {
    try{
        const {id} = req.params
        const {comment} = req.body
        const user = req.user
        const newComment = await Comment.insertOne({comment ,  created_by : user._id, post_id : id})
        res.send(newComment)
    }catch(e){
        console.log(e.message)
        res.status(400).json({message : e.message})
    }
})

module.exports = router