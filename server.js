const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')

const urlRouter = require('./routes/shortUrls')
const app = express()

dotenv.config({path: './config/config.env'})
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', urlRouter)


app.get('/', (req, res) => {
    const Url = { }
    res.render('index', { Url: Url })
})

app.listen(process.env.PORT)
