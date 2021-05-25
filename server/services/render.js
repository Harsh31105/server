const axios = require('axios')

exports.homeRoute = (req, res) => {
    axios.get('http://localhost:3001/api/users')
        .then(function(response) {
            // console.log(response)
            res.render('index', { users: response.data })
        })
        .catch(err => {
            res.send(err.message)
        })
}

exports.add_user = (req, res) => {
    res.render('add')
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3001/api/users', { params: { id: req.query.id } })
        .then(function(userData) {
            res.render('update', { user: userData.data })
        })
        .catch(err => {
            res.send(err)
        })
}