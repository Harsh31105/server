const express = require('express')
const path = require('path')
const connectDB = require('./server/database/connection')
const router = require('./server/routes/router')
const bodyParser = require('body-parser')
const PORT = 3001
const app = express()

connectDB()

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

//Loading Assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))

//Routes
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})