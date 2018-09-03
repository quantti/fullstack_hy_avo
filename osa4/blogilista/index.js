const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')

app.use('/api/blogs', blogsRouter)

app.use(cors())
app.use(bodyParser.json())

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})