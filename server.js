const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const DBconnection = require('./config/Database')


// Route Pathes
const usersRoute = require('./routes/users')


// initialize app
const app = express()

// Dotenv Configration
dotenv.config('./.env')

// DB Connection
DBconnection()

// Static Files with express
app.use(express.static('./public'))

// Setting The View Engine EJS
app.set('view engine', 'ejs')

// Routes
app.use('/users', usersRoute)
// All  Other Routes will hit this route
app.get('*',(req, res) => {
    return res.render('app')
})

// Serving The App
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(' App Running On '.inverse.green.bold, `http://localhost:${PORT}`.cyan,))