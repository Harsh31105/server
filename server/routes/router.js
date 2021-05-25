const express = require('express')
const router = express.Router()
const render = require('../services/render')
const controller = require('../controller/controller')

router.get('/', render.homeRoute)
router.get('/add', render.add_user)
router.get('/update', render.update_user)

//API Routes
router.post('/api/users', controller.create)

module.exports = router