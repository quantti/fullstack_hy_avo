const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')

app.use('/api/blogs', blogsRouter)

app.use(cors())
app.use(bodyParser.json())

const mongoUrl = 'mongodb://vankari:testipassu1@ds245680.mlab.com:45680/testikanta'

mongoose.connect(mongoUrl, { useNewUrlParser: true })

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})