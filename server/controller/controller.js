const userDB = require('../model/model')

//Create and Save New User
exports.create = (req, res) => {
    if (!req.body) {
        res.send('Content cannot be empty.')
        return
    }
    //New User
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    //Saving user in DataBase
    user
        .save(user)
        .then(data => {
            res.redirect('/add')
        })
        .catch(err => {
            res.send({ message: err.message })
        })
}