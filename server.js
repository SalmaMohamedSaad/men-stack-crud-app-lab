require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override') // new
const morgan = require('morgan')
const path = require('path')
const bookRoute = require('./routes/books')

const app = express()
const PORT = process.env.PORT
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method')) // new

app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(morgan('dev'))

app.use(bookRoute)

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})
