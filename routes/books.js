const express = require('express')
const route = express.Router()
const bookController = require('../controllers/books')

route.get('/books/newBook', bookController.newBook)
route.get('/books/index', bookController.index)
route.post('/books/create', bookController.create)
route.post('/books/:id/update', bookController.update)
route.get('/books/:id/show', bookController.show)
route.get('/books/:id/delete', bookController.deleteBook)
module.exports = route
