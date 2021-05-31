const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const connectDB = require('./server/database/connection')
const PORT = 3001
const app = express()

connectDB()

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

//Loading Assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

//Routes
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})