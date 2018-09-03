const mongoose = require('mongoose')
const mongoUrl = 'mongodb://vankari:testipassu1@ds245680.mlab.com:45680/testikanta'

mongoose.connect(mongoUrl, { useNewUrlParser: true })

const Blog = mongoose.model('Blog', {
  title: String,
  author: String,
  url: String,
  likes: Number
})

module.exports = Blog