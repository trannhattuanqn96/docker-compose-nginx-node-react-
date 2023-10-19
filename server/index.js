const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello quy báo!')
})

app.get('/abc', (req, res) => {
    res.send('hello 2 3 4 5!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})