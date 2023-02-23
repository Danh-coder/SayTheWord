const path = require('path')
const express = require('express')
const proxy = require('html2canvas-proxy');

const app = express()

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.json())
app.use(express.static(publicDirectoryPath))
app.use('/proxy', proxy())

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(port, () => {
    console.log('App is listening to port ' + port);
})