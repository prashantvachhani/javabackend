require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/Twiter', (req, res) => {
    res.send('prashant')
})

app.get('/login', (req, res) => {
    res.send('<h1>Plese login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcom to Youtube page</h2>')
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})