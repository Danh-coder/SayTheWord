const path = require('path')
const express = require('express')
const exp = require('constants')

const app = express()

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(port, () => {
    console.log('App is listening to port ' + port);
})