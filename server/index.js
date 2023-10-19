const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(' 3 4 5 6a tuan tran nhat 1234!')
})

app.get('/abc', (req, res) => {
    res.send('hello 2 3 4 5!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
