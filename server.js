const express = require('express')
const dotenv = require('dotenv')
const DBconnection = require('./config/Database')


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

// All  Other Routes will hit this route
app.get('*',(req, res) => {
    return res.render('app')
})

// Serving The App
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running On Port ${PORT}`))