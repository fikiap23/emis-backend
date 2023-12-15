const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const Routes = require('./routes/route.js')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('NOT CONNECTED TO NETWORK', err))

// Define your API routes
app.use('/', Routes)

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`)
})
