const mongoose = require('mongoose')
 
const urlSchema = new mongoose.Schema({
    url: {
        type: String
    },
    shortenedUrls: {
        type: String
    }
})

module.exports = mongoose.model('shortUrls', urlSchema)