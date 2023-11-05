const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' , (req , res) => {
    res.send('Successfully Logged In')
})

app.get('/about' , (req , res) => {
    res.send('<h1>Yukti is Learning Backened</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})