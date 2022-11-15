const express = require('express')
const router = express.Router()

const authenticateRoute = require('./authenticate')
const followRoute = require('./follow')
const userRoute = require('./user')
const postsRoute = require('./posts')


router.use('/', [authenticateRoute, followRoute, userRoute, postsRoute])

module.exports = router