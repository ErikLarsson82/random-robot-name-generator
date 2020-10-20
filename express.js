const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.static('public'))

app.get('/random-robot-name-generator.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/random-robot-name-generator.js'))
})

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})