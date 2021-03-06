require('dotenv').config()
const express = require('express')
const { connectMongo } = require('./config/mongo.config')

const app = express()

connectMongo().on('error', error => console.log(error))
connectMongo().once('open', () => console.log('connection to db established'))
app.use(express.json())

const isiRouter = require('./endpoints/isis')
app.use('/indexes', isiRouter)
app.listen(process.env.PORT, () => console.log(`server has started at port ${process.env.PORT}`))
