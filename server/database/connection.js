const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb+srv://HarshSingh:1002@cluster0.aynrk.mongodb.net/userManagementSystem?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('MongoDB connected.')
}

module.exports = connectDB