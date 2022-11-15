const express = require('express')
const router = express.Router()

router.post('/posts', (req, res) => {
    const {title, description} = req.body
    res.send(`create new post from auth user`)
})

router.route('/posts/:id')
      .delete((req, res) => {
            const {id} = req.params
            res.send(`delete post with ${id} created by the authenticated user`)
        })
      .get((req, res) => {
            const {id} = req.params
            res.send(`return a single post with ${id} populated with its number of likes and comments`)
        })

router.get('/all_posts', (req, res) => {
    res.send(`return all posts created by authenticated user sorted by post time.`)
})

module.exports = router