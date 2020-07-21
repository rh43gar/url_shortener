const express = require('express')

const UrlData = require('../models/shortUrls')

const router = express.Router()

router.post('/shortUrls', async(req, res) => {

    let new_url = new UrlData({
        url: req.body.url,
        shortenedUrls: Math.random().toString(36).substr(2, 6)
    })
    new_url = await new_url.save()

    const Url = await UrlData.findOne({'url': req.body.url})

    res.render('url', {Url: Url})
})

router.get('/:shortUrl', async(req, res) => {
    const shortUrl = await UrlData.findOne({'shortenedUrls': req.params.shortUrl})
    if(shortUrl == null) return res.sendStatus(404)
    res.redirect(shortUrl.url)
})

module.exports = router
