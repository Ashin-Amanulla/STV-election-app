const express = require('express')
const helmet = require("helmet");
const cors = require('cors')
const logger =require('morgan')
const compression = require('compression')


require('dotenv').config() //environmental variables
require('./config/init_mongodb.js') //DB initialisation
const PORT = 3400 || process.env.PORT

const app = express()
app.use(helmet());
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(compression())






app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })
  