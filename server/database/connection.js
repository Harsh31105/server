const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect('mongodb+srv://HarshSingh:1002@cluster0.aynrk.mongodb.net/userManagementSystem?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    console.log('MongoDB connected.')
}

module.exports = connectDB