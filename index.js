const snekfetch = require('snekfetch')
const express = require('express')
const mime = require('mime-types')
const path = require('path')
const app = express()

const port = process.env.PORT || 8080

app.get('/', async (req, res) => {
  try {
    const { body } = await snekfetch.get(process.env.GIST_URL)
    res.set('content-type', mime.contentType(path.basename(process.env.GIST_URL))).send(body)
  } catch (e) {
    console.error(e)
  }
})

app.listen(port)