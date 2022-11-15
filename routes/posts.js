const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.post('/posts', async (req, res) => {
    try{
        const {title, description} = req.body
        const user = req.user
        const newPost = await Post.insertOne({title, description, created_by : user._id})
        const newPostId = newPost.insertedId
        const post = await Post.findOne({_id : newPostId})
        res.send(post)
    }catch(e){
        console.log(e.message)
        res.status(403).json({message : e.message})
    }
})

router.route('/posts/:id')
      .delete(async (req, res) => {
            try{
                const {id} = req.params
                const user = req.user
                await Post.deleteOne({_id : id, created_by : user._id})
                res.send(`delete post with ${id} created by the authenticated user`)
            }catch(e){
                console.log(e.message)
                res.status(404).json({message : e.message})
            }
        })
      .get(async (req, res) => {
            try{
                const {id} = req.params
                const post = await Post.findOne({_id : id}).populate('comments')
                post.likes = post.likes.length
                res.send(post)
            }catch(e){
                console.log(e.message)
                res.status(404).json({message : e.message})
            }
        })

router.get('/all_posts', async (req, res) => {
    try{
        const user = req.user
        const posts = await Post.find({created_by : user._id}).populate('likes comments')
        res.send(posts)
    }catch(e){
        console.log(e.message)
        res.status(404).json({message : e.message})
    }
})

module.exports = router