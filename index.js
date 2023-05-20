const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
    {
      name: 'Alice',
      email: 'alice@gmail.com'
    },
    {
      name: 'Jake',
      email: 'jake@gmail.com'
    },
    {
      name: 'James',
      email: 'james@gmail.com'
    },
    {
      name: 'Bob',
      email: 'bob@gmail.com'
    }
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})