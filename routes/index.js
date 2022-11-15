const authenticateRoute = require('./authenticate')
const express = require('express')
const router = express.Router()

router.use('/', [authenticateRoute])

module.exports = router