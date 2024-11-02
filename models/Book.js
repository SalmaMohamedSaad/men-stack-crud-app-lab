const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  coverImage: String,
  numberOfPages: Number,
  rate: Number,
  description: String
})

const Book = mongoose.model('Book', bookSchema) // create model

module.exports = Book
