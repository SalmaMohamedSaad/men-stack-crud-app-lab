const Book = require('../models/Book')

const index = async (req, res) => {
  const books = await Book.find()
  res.render('books/index.ejs', { books })
}

const newBook = (req, res) => {
  res.render('books/newBook.ejs')
}
const create = async (req, res) => {
  await Book.create(req.body)
  res.redirect('/books/index')
}
const show = async (req, res) => {
  const id = req.params.id
  const book = await Book.findById(id)
  res.render('books/show.ejs', { book })
}
const deleteBook = async (req, res) => {
  const id = req.params.id
  await Book.findByIdAndDelete(id)
  res.redirect('/books/index')
}
const update = async (req, res) => {
  const id = req.params.id
  await Book.findByIdAndUpdate(id, req.body)
  res.redirect(`/books/index`)
}
module.exports = {
  index,
  newBook,
  create,
  show,
  deleteBook,
  update
}
