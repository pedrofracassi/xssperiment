const snekfetch = require('snekfetch')
const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.get('/', async (req, res) => {
  try {
    const { body } = await snekfetch.get(process.env.GIST_URL)
    res.set('content-type', 'application/javascript; charset=utf-8').send(body)
  } catch (e) {
    console.error(e)
  }
})

app.listen(port)